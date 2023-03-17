import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import useDebounce from 'hooks/useDebounce';
import { searchQueryState, searchValueState } from 'recoil/atoms';

const SearchInput = ({ ...props }) => {
  const [value, setValue] = useRecoilState(searchValueState);
  const setQuery = useSetRecoilState(searchQueryState);
  const debouncedValue = useDebounce(value, 700);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setQuery(debouncedValue);
  }, [setQuery, debouncedValue]);

  return (
    <S.Container>
      <Image src="/images/search.svg" alt="Search" width={24} height={24} />
      <S.Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="듣고 싶은 음악을 검색해보세요."
        {...props}
      />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    height: 50px;
    padding: 15px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
  `,
  Input: styled.input`
    width: 100%;
    border: none;
    background-color: inherit;
    &::placeholder {
      color: ${({ theme }) => theme.colors.lightgray};
    }
  `,
};

export default SearchInput;
