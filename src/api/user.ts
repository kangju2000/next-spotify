import api from 'api/api';

export const getUser = () => {
  return api<SpotifyApi.UserProfileResponse>({
    method: 'get',
    url: 'https://api.spotify.com/v1/me',
  });
};
