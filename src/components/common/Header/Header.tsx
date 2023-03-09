import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import Clock from 'components/common/Clock/Clock';
import SearchInput from 'components/common/SearchInput/SearchInput';
import useDebounce from 'hooks/useDebounce';
import { searchQueryState, searchValueState } from 'recoil/atoms';
import * as S from './Header.styles';

const Header = () => {
  const [value, setValue] = useRecoilState(searchValueState);
  const setQuery = useSetRecoilState(searchQueryState);
  const debouncedValue = useDebounce(value, 700);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setQuery(debouncedValue);
  }, [setQuery, debouncedValue]);

  return (
    <S.Container>
      <Clock />
      <SearchInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="듣고 싶은 음악을 검색해보세요."
      />
      <button onClick={() => router.push('/api/login')}>로그인</button>
    </S.Container>
  );
};

export default Header;
