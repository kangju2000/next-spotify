import api from 'api/api';

export const getNewReleases = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/new-releases',
  });
};

export const getCategories = async ({ pageParam = 0 }) => {
  const { data } = await api<SpotifyApi.MultipleCategoriesResponse>({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/categories',
    params: {
      offset: pageParam,
    },
  });

  return { data, pageParam };
};

export const getCategory = (id: string) => {
  return api({
    method: 'get',
    url: `https://api.spotify.com/v1/browse/categories/${id}`,
  });
};

export const getCategoryPlaylists = async ({
  pageParam,
  id,
}: {
  pageParam: number;
  id: string;
}) => {
  const { data } = await api<SpotifyApi.CategoryPlaylistsResponse>({
    method: 'get',
    url: `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
    params: {
      offset: pageParam,
    },
  });

  return { data, pageParam };
};

export const getPlaylistTracks = async ({ pageParam, id }: { pageParam: number; id: string }) => {
  const { data } = await api<SpotifyApi.PlaylistTrackResponse>({
    method: 'get',
    url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
    params: {
      offset: pageParam,
    },
  });

  return { data, pageParam };
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
