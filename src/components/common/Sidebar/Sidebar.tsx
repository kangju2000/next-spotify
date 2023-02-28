import { useRouter } from 'next/router';
import * as S from './Sidebar.styles';

const Sidebar = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };
  return (
    <S.Container>
      <button onClick={handleHomeClick}>홈</button>
    </S.Container>
  );
};

export default Sidebar;
