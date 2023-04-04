import styled from '@emotion/styled';
import { Suspense, lazy } from 'react';
import { isMobile } from 'react-device-detect';
import { useRecoilValue } from 'recoil';
import { searchQueryState } from 'recoil/atoms';
import Header from './Header';
import Player from './Player';
import Sidebar from './Sidebar';

const SearchPage = lazy(() => import('pages/search'));
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
        <S.Wrapper>
          {searchQuery ? (
            <Suspense fallback={null}>
              <SearchPage />
            </Suspense>
          ) : (
            children
          )}
        </S.Wrapper>
      </S.Content>
      <Player />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background: linear-gradient(#222222, #121212);
    color: ${({ theme }) => theme.colors.white};
  `,
  Content: styled.div`
    flex-grow: 1;
    min-height: 100vh;
    padding: 0 30px 100px;
    overflow: hidden;
    ${!isMobile && 'margin-left: 100px;'}
  `,
  Wrapper: styled.div`
    width: 100%;
  `,
};

export default Layout;
