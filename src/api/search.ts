import api from 'api/api';

export const getSearch = ({ q }: SpotifyApi.SearchForItemParameterObject) => {
  return api({
    method: 'get',
    url: `https://api.spotify.com/v1/search?q=${q}&type=artist,track`,
  });
};
