import SearchInput from 'components/SearchInput/SearchInput';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Container>
      <SearchInput placeholder="듣고 싶은 음악을 검색해보세요." />
    </S.Container>
  );
};

export default Header;
