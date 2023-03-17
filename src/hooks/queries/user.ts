import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import { getUser } from 'api/user';

export const useGetUser = (
  options?: UseQueryOptions<AxiosResponse<SpotifyApi.UserProfileResponse>, AxiosError>
) =>
  useQuery<AxiosResponse<SpotifyApi.UserProfileResponse>, AxiosError>(['user'], () => getUser(), {
    staleTime: Infinity,
    ...options,
  });
