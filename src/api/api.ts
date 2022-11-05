import axios from 'axios';
import { BASE_URL } from 'constants/path';
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((req) => {
  const accessToken = getCookie('access_token');
  if (!accessToken) return req;

  req.headers = {
    authorization: `Bearer ${accessToken}`,
  };

  return req;
});
// (error) => {
//   return Promise.reject(error);
// }

export default api;
