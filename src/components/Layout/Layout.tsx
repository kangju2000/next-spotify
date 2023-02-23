import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import * as S from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Sidebar />
      <>
        <Header />
        {children}
      </>
    </S.Container>
  );
};

export default Layout;
