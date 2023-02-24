import Header from 'components/common/Header/Header';
import Sidebar from 'components/common/Sidebar/Sidebar';
import * as S from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Header />
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Layout;
