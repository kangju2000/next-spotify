import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setToken = (token: string) => {
  if (typeof window === 'undefined') {
    axios.defaults.headers.common['Autorization'] = `Bearer ${token}`;
  }

  cookies.set('access_token', token, { path: '/' });
};

export const getToken = () => {
  const token = cookies.get('access_token');
  if (token) {
    return token;
  }
  return null;
};
