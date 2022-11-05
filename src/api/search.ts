import { getSearchProps } from 'types/spotify';
import api from 'api/api';

export const getSearch = (query: getSearchProps) => {
  return api({
    method: 'get',
    url: `https://api.spotify.com/v1/search?q=${query.q}&type=${query.type}`,
  });
};
