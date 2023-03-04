import {
  useQuery,
  useInfiniteQuery,
  type UseQueryOptions,
  type UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import {
  getCategories,
  getCategory,
  getCategoryPlaylists,
  getFeaturedPlaylists,
  getNewReleases,
  getPlaylistTracks,
  getRecommendations,
  getRecommendationsGenres,
} from 'api/browse';

export const useGetNewReleases = () => {
  const { data, error, isLoading } = useQuery(['newReleases'], () => getNewReleases());

  return { data, error, isLoading };
};

export type InfiniteCategoriesResponse = {
  data: SpotifyApi.MultipleCategoriesResponse;
  pageParam: number;
};

export const useGetCategories = (
  options?: UseInfiniteQueryOptions<InfiniteCategoriesResponse, AxiosError>
) =>
  useInfiniteQuery<InfiniteCategoriesResponse, AxiosError>(
    ['categories'],
    ({ pageParam = 0 }) => getCategories({ pageParam }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.categories.next ? lastPage.pageParam + 20 : undefined,
      ...options,
    }
  );

export const useGetCategory = (id: string) => {
  const { data, error, isLoading } = useQuery(['category', id], () => getCategory(id));

  return { data, error, isLoading };
};

export const useGetCategoryPlaylists = (id: string) =>
  useInfiniteQuery(
    ['categoryPlaylists', id],
    ({ pageParam = 0 }) => getCategoryPlaylists({ pageParam, id }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.playlists.next ? lastPage.pageParam + 20 : undefined,
    }
  );

export const useGetPlaylistTracks = (id: string) =>
  useInfiniteQuery(
    ['playlistTracks', id],
    ({ pageParam = 0 }) => getPlaylistTracks({ pageParam, id }),
    {
      getNextPageParam: (lastPage) => (lastPage.data.next ? lastPage.pageParam + 20 : undefined),
    }
  );

export const useGetRecommendationsGenres = () => {
  const { data, error, isLoading } = useQuery(['recommendationsGenres'], getRecommendationsGenres);

  return { data, error, isLoading };
};

export const useGetRecommendations = (
  { seed_genres, seed_artists, seed_tracks, limit }: SpotifyApi.RecommendationsOptionsObject,
  options?: UseQueryOptions<{ data: SpotifyApi.RecommendationsFromSeedsResponse }, AxiosError>
) => {
  return useQuery<{ data: SpotifyApi.RecommendationsFromSeedsResponse }, AxiosError>(
    ['recommendations'],
    () => getRecommendations({ seed_genres, seed_artists, seed_tracks, limit }),
    {
      enabled: !!seed_genres || !!seed_artists || !!seed_tracks,
      ...options,
    }
  );
};

export const useGetFeaturedPlaylists = () => {
  const { data, error, isLoading } = useQuery(['featuredPlaylists'], getFeaturedPlaylists);

  return { data, error, isLoading };
};
