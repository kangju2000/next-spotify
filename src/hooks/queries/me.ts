import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import { getPlaybackQueue, getUser } from 'api/me';

export const useGetUser = (
  options?: UseQueryOptions<AxiosResponse<SpotifyApi.UserProfileResponse>, AxiosError>
) =>
  useQuery<AxiosResponse<SpotifyApi.UserProfileResponse>, AxiosError>(['user'], () => getUser(), {
    staleTime: Infinity,
    ...options,
  });

export const useGetPlaybackQueue = () => useQuery(['queue'], () => getPlaybackQueue(), {});
