import axios from 'axios';
import { BASE_URL } from 'constants/path';
import { getToken } from 'utils/TokenManager';
import { postToken } from './token';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (req) => {
    const accessToken = getToken();
    if (!accessToken) return req;

    const headers = req.headers || {};
    headers.authorization = `Bearer ${accessToken}`;

    return req;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      postToken().then((res) => {
        const token = res.data.access_token;
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        originalRequest.headers['Authorization'] = `Bearer ${token}`;

        return api(originalRequest);
      });
    }

    return Promise.reject(error);
  }
);

export default api;
