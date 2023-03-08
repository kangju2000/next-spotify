import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getSearch } from 'api/search';

export const useGetSearchAll = (q: string) =>
  useQuery(['search', q], () => getSearch({ q, type: 'album,artist,playlist,track' }));

export const useGetSearchAlbums = (q: string) =>
  useInfiniteQuery(['search', q], () => getSearch({ q, type: 'album' }), {
    getNextPageParam: (lastPage) =>
      lastPage.data.albums.next ? lastPage.pageParam + 20 : undefined,
  });

export const useGetSearchArtists = (q: string) =>
  useInfiniteQuery(['search', q], () => getSearch({ q, type: 'artist' }));

export const useGetSearchPlaylists = (q: string) =>
  useInfiniteQuery(['search', q], () => getSearch({ q, type: 'playlist' }));

export const useGetSearchTracks = (q: string) =>
  useInfiniteQuery(['search', q], () => getSearch({ q, type: 'track' }));
