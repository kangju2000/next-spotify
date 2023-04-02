import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
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
      {!isMobile && <Sidebar />}
      <S.Content>
        <Header />
        {searchQuery ? <SearchPage /> : children}
      </S.Content>
      <Player />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#222222, #121212);
    color: ${({ theme }) => theme.colors.white};
  `,
  Content: styled.div`
    width: 100%;
    padding: 0 30px 100px;
  `,
};

export default Layout;
