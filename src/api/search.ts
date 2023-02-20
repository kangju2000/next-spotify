import api from 'api/api';
import { getSearchProps } from 'types/spotify';

export const getSearch = (query: getSearchProps) => {
  return api({
    method: 'get',
    url: `https://api.spotify.com/v1/search?q=${query.q}&type=${query.type}`,
  });
};
