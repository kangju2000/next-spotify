import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import SearchPage from 'pages/search';
import { searchQueryState } from 'recoil/atoms';
import Header from './Header';
import Player from './Player';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const searchQuery = useRecoilValue(searchQueryState);

  return (
    <S.Container>
      <Sidebar />
      <Player />
      <S.Content>
        <Header />
        {searchQuery ? <SearchPage /> : children}
      </S.Content>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding-left: 100px;
    background: linear-gradient(#222222, #121212);
    color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
  `,
  Content: styled.div`
    width: 100%;
    padding: 0 30px;
  `,
};

export default Layout;
