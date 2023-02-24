import api from 'api/api';

export const getNewReleases = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/new-releases',
  });
};

export const getCategories = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/categories',
  });
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

export const getRecommendations = ({
  seed_genres,
  seed_artists,
  seed_tracks,
  limit,
}: SpotifyApi.RecommendationsOptionsObject) => {
  const genres = Array.isArray(seed_genres) ? seed_genres.join(',') : seed_genres;
  const artists = Array.isArray(seed_artists) ? seed_artists.join(',') : seed_artists;
  const tracks = Array.isArray(seed_tracks) ? seed_tracks.join(',') : seed_tracks;
  const params = new URLSearchParams();

  if (genres) params.append('seed_genres', genres);
  if (artists) params.append('seed_artists', artists);
  if (tracks) params.append('seed_tracks', tracks);
  if (limit) params.append('limit', limit.toString());

  return api({
    method: 'get',
    url: `https://api.spotify.com/v1/recommendations?${params.toString()}`,
  });
};

export const getFeaturedPlaylists = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/featured-playlists',
  });
};
