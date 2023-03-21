import api from 'api/api';

export const getSearch = async ({
  q,
  type,
  limit = 10,
  offset = 0,
}: SpotifyApi.SearchForItemParameterObject) => {
  const { data } = await api<SpotifyApi.SearchResponse>({
    method: 'get',
    url: 'https://api.spotify.com/v1/search',
    params: {
      q,
      type,
      limit,
      offset,
    },
  });

  return { data, pageParam: offset };
};
