import { useRecoilValue } from 'recoil';
import Header from 'components/common/Header/Header';
import Sidebar from 'components/common/Sidebar/Sidebar';
import SearchPage from 'pages/search';
import { searchQueryState } from 'recoil/atoms';
import * as S from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const searchQuery = useRecoilValue(searchQueryState);

  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Header />
        {searchQuery ? <SearchPage /> : children}
      </S.Content>
    </S.Container>
  );
};

export default Layout;
