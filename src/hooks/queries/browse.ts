import {
  getCategories,
  getCategory,
  getCategoryPlaylists,
  getFeaturedPlaylists,
  getNewReleases,
  getRecommendations,
  getRecommendationsGenres,
} from 'api/browse';
import { useQuery } from 'react-query';

export const useGetNewReleases = () => {
  const { data, error, isLoading } = useQuery('newReleases', getNewReleases);

  return { data, error, isLoading };
};

export const useGetCategories = () => {
  const { data, error, isLoading } = useQuery('categories', getCategories);

  return { data, error, isLoading };
};

export const useGetCategory = (id: string) => {
  const { data, error, isLoading } = useQuery(['category', id], () => getCategory(id));

  return { data, error, isLoading };
};

export const useGetCategoryPlaylists = (id: string) => {
  const { data, error, isLoading } = useQuery(['categoryPlaylists', id], () =>
    getCategoryPlaylists(id)
  );

  return { data, error, isLoading };
};

export const useGetRecommendationsGenres = () => {
  const { data, error, isLoading } = useQuery('recommendationsGenres', getRecommendationsGenres);

  return { data, error, isLoading };
};

export const useGetRecommendations = ({
  seed_genres,
  seed_artists,
  seed_tracks,
  limit,
}: SpotifyApi.RecommendationsOptionsObject) => {
  const { data, error, isLoading } = useQuery(
    ['recommendations', seed_genres, seed_artists, seed_tracks, limit],
    () => getRecommendations({ seed_genres, seed_artists, seed_tracks, limit })
  );

  return { data, error, isLoading };
};

export const useGetFeaturedPlaylists = () => {
  const { data, error, isLoading } = useQuery('featuredPlaylists', getFeaturedPlaylists);

  return { data, error, isLoading };
};
