import { Avatar, Button, Menu } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { loginDataState } from 'recoil/atoms';

const User = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useRecoilState(loginDataState);

  const handleLogout = () => {
    setLoginData(null);
    axios.post('/api/logout');
    setLoginData(null);
    notifications.show({
      title: '로그아웃 되었습니다.',
      message: '다음에 또 봐요!',
    });
  };

  if (!loginData) {
    return (
      <Button variant="default" size="lg" onClick={() => router.push('/api/login')}>
        로그인
      </Button>
    );
  }

  return (
    <Menu withArrow>
      <Menu.Target>
        <Avatar
          src={loginData.images && loginData.images[0].url}
          size="lg"
          radius="xl"
          styles={{
            root: {
              cursor: 'pointer',
            },
          }}
        >
          {loginData.display_name}
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>
          안녕하세요
          <br />
          {loginData.display_name} 님!
        </Menu.Label>
        <Menu.Item onClick={handleLogout}>로그아웃</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default User;
