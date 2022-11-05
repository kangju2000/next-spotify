import axios from 'axios';

const setToken = (token: string) => {
  axios.defaults.headers.common['Autorization'] = `Bearer ${token}`;
};
export default setToken;
