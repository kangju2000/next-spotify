import api from 'api/api';
import { getSearchQuery } from 'types/spotify';

export const getSearch = (query: getSearchQuery) => {
  return api({
    method: 'get',
    url: `https://api.spotify.com/v1/search?q=${query.q}&type=artist,track`,
  });
};
