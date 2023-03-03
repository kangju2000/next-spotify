import { Cookies } from 'react-cookie';
import api from 'api/api';

const cookies = new Cookies();

export const setToken = (token: string) => {
  api.defaults.headers.common['Autorization'] = `Bearer ${token}`;

  cookies.set('access_token', token, { path: '/' });
};

export const getToken = () => {
  const token = cookies.get('access_token');
  if (token) {
    return token;
  }

  return null;
};
