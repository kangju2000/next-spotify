import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import type { UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
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

export const useGetNewReleases = () => useQuery(['newReleases'], () => getNewReleases());

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

export const useGetCategory = (id: string) => useQuery(['category', id], () => getCategory(id));

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

export const useGetRecommendationsGenres = () =>
  useQuery(['recommendationsGenres'], getRecommendationsGenres);

export const useGetRecommendations = (
  { seed_genres, seed_artists, seed_tracks, limit }: SpotifyApi.RecommendationsOptionsObject,
  options?: UseQueryOptions<{ data: SpotifyApi.RecommendationsFromSeedsResponse }, AxiosError>
) => {
  return useQuery<{ data: SpotifyApi.RecommendationsFromSeedsResponse }, AxiosError>(
    ['recommendations'],
    () => getRecommendations({ seed_genres, seed_artists, seed_tracks, limit }),
    options
  );
};

export const useGetFeaturedPlaylists = () => useQuery(['featuredPlaylists'], getFeaturedPlaylists);
