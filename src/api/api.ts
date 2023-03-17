import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { postRefreshToken, postAuthorizationToken } from 'api/token';
import { BASE_API_URL } from 'constants/path';

const api = axios.create({
  baseURL: BASE_API_URL,
});

api.interceptors.request.use(
  async (req) => {
    if (typeof window !== 'undefined') {
      const access_token = getCookie('access_token');
      const refresh_token = getCookie('refresh_token') as string;

      if (access_token) {
        req.headers['Authorization'] = `Bearer ${access_token}`;
        return req;
      }

      if (refresh_token) {
        const { data } = await postRefreshToken(refresh_token);
        req.headers['Authorization'] = `Bearer ${data.access_token}`;
        setCookie('access_token', data.access_token, {
          maxAge: data.expires_in,
        });

        return req;
      }

      const { data } = await postAuthorizationToken();
      req.headers['Authorization'] = `Bearer ${data.access_token}`;
      setCookie('access_token', data.access_token, {
        maxAge: data.expires_in,
      });
    }

    return req;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { config, response } = error;

    if (response?.status === 401 && !config._retry) {
      config._retry = true;
      const refresh_token = getCookie('refresh_token') as string;

      if (!refresh_token) {
        const { data } = await postAuthorizationToken();
        api.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
        setCookie('access_token', data.access_token, {
          maxAge: data.expires_in,
        });

        return Promise.reject(error);
      }

      const { data } = await postRefreshToken(refresh_token);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
      setCookie('access_token', data.access_token, {
        maxAge: data.expires_in,
      });

      return api(config);
    }

    return Promise.reject(error);
  }
);

export default api;
