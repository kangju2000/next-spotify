import axios from 'axios';
import { BASE_URL } from 'constants/path';
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});
// axios.defaults.withCredentials = true;

api.interceptors.request.use((req) => {
  const accessToken = getCookie('access_token');
  if (!accessToken) return req;

  req.headers = {
    authorization: `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin': '*',
  };

  return req;
});
// (error) => {
//   return Promise.reject(error);
// }

export default api;
