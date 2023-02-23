import SearchInput from 'components/SearchInput/SearchInput';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Container>
      <S.Clock>
        <S.Time>19:00</S.Time>
        <S.Date>2022.02.22 수요일</S.Date>
      </S.Clock>
      <SearchInput placeholder="듣고 싶은 음악을 검색해보세요." />
    </S.Container>
  );
};

export default Header;
