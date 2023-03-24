import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { postRefreshToken, postClientCredentialsToken } from 'api/token';
import { BASE_API_URL } from 'constants/path';

const api = axios.create({
  baseURL: BASE_API_URL,
});

api.interceptors.request.use(
  async (req) => {
    if (typeof window !== 'undefined') {
      try {
        const access_token = getCookie('access_token');
        const refresh_token = getCookie('refresh_token');

        if (typeof access_token === 'string' && access_token !== '') {
          req.headers['Authorization'] = `Bearer ${access_token}`;
          return req;
        }

        if (typeof refresh_token === 'string' && refresh_token !== '') {
          const { data } = await postRefreshToken(refresh_token);
          req.headers['Authorization'] = `Bearer ${data.access_token}`;
          setCookie('access_token', data.access_token, {
            maxAge: data.expires_in,
          });

          return req;
        }

        const { data } = await postClientCredentialsToken();
        req.headers['Authorization'] = `Bearer ${data.access_token}`;
        setCookie('access_token', data.access_token, {
          maxAge: data.expires_in,
        });
      } catch (error) {
        return req;
      }
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
      try {
        config._retry = true;
        const refresh_token = getCookie('refresh_token');

        if (typeof refresh_token === 'string' && refresh_token !== '') {
          const { data } = await postRefreshToken(refresh_token);
          api.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
          setCookie('access_token', data.access_token, {
            maxAge: data.expires_in,
          });

          return api(config);
        }

        const { data } = await postClientCredentialsToken();
        api.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
        setCookie('access_token', data.access_token, {
          maxAge: data.expires_in,
        });

        return api(config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
