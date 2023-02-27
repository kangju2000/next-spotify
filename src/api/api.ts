import { postToken } from 'api/token';
import axios from 'axios';
import { BASE_URL } from 'constants/path';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (req) => {
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

      const {
        data: { access_token },
      } = await postToken();

      api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      return api(config);
    }

    return Promise.reject(error);
  },
  { synchronous: true }
);

export default api;
