import api from 'api/api';

export const getNewReleases = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/new-releases',
  });
};

export const getCategories = async () => {
  const { data } = await api({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/categories',
  });

  return { data };
};

export const getCategory = (id: string) => {
  return api({
    method: 'get',
    url: `https://api.spotify.com/v1/browse/categories/${id}`,
  });
};

export const getCategoryPlaylists = (id: string) => {
  return api({
    method: 'get',
    url: `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
  });
};

export const getRecommendationsGenres = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
  });
};

export const getRecommendations = async (
  params: Pick<
    SpotifyApi.RecommendationsOptionsObject,
    'seed_genres' | 'seed_artists' | 'seed_tracks' | 'limit'
  >
) => {
  const { data } = await api<SpotifyApi.RecommendationsFromSeedsResponse>({
    method: 'get',
    url: 'https://api.spotify.com/v1/recommendations',
    params,
  });

  return { data };
};

export const getFeaturedPlaylists = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/featured-playlists',
  });
};
