import Clock from 'components/common/Clock/Clock';
import SearchInput from 'components/common/SearchInput/SearchInput';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Container>
      <Clock />
      <SearchInput placeholder="듣고 싶은 음악을 검색해보세요." />
    </S.Container>
  );
};

export default Header;
