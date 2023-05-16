import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getSearch } from 'api/search';

export const useGetSearchAll = (q: string) =>
  useQuery(['search', q], () => getSearch({ q, type: 'album,artist,playlist,track' }), {
    enabled: !!q,
    suspense: true,
  });

export const useGetSearchAlbums = (q: string) =>
  useInfiniteQuery(['search', q], () => getSearch({ q, type: 'album' }), {
    getNextPageParam: (lastPage) =>
      lastPage.data.albums?.next ? lastPage.pageParam + 20 : undefined,
  });

export const useGetSearchArtists = (q: string) =>
  useInfiniteQuery(
    ['search-artist', q],
    ({ pageParam = 0 }) => getSearch({ offset: pageParam, q, type: 'artist' }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.artists?.next ? lastPage.pageParam + 10 : undefined,
    }
  );

export const useGetSearchPlaylists = (q: string) =>
  useInfiniteQuery(
    ['search-playlist', q],
    ({ pageParam = 0 }) => getSearch({ offset: pageParam, q, type: 'playlist' }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.playlists?.next ? lastPage.pageParam + 10 : undefined,
    }
  );

export const useGetSearchTracks = (q: string) =>
  useInfiniteQuery(
    ['search-track', q],
    ({ pageParam = 0 }) => getSearch({ offset: pageParam, q, type: 'track' }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.tracks?.next ? lastPage.pageParam + 10 : undefined,
    }
  );
