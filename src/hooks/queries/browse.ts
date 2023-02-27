import {
  getCategories,
  getCategory,
  getCategoryPlaylists,
  getFeaturedPlaylists,
  getNewReleases,
  getRecommendations,
  getRecommendationsGenres,
} from 'api/browse';
import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

export const useGetNewReleases = () => {
  const { data, error, isLoading } = useQuery('newReleases', getNewReleases);

  return { data, error, isLoading };
};

export const useGetCategories = (
  options?: UseQueryOptions<AxiosResponse<SpotifyApi.MultipleCategoriesResponse>, AxiosError>
) => {
  const { data, error, isLoading } = useQuery<
    AxiosResponse<SpotifyApi.MultipleCategoriesResponse>,
    AxiosError
  >('categories', getCategories, options);

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

export const useGetRecommendations = (
  { seed_genres, seed_artists, seed_tracks, limit }: SpotifyApi.RecommendationsOptionsObject,
  options?: UseQueryOptions<AxiosResponse<SpotifyApi.RecommendationsFromSeedsResponse>, AxiosError>
) => {
  return useQuery<AxiosResponse<SpotifyApi.RecommendationsFromSeedsResponse>, AxiosError>(
    ['recommendations', seed_genres, seed_artists, seed_tracks, limit],
    () => getRecommendations({ seed_genres, seed_artists, seed_tracks, limit }),
    {
      enabled: !!seed_genres || !!seed_artists || !!seed_tracks,
      ...options,
    }
  );
};

export const useGetFeaturedPlaylists = () => {
  const { data, error, isLoading } = useQuery('featuredPlaylists', getFeaturedPlaylists);

  return { data, error, isLoading };
};
