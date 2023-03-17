import api from './api';

export const getUser = () => {
  return api<SpotifyApi.UserProfileResponse>({
    method: 'get',
    url: 'https://api.spotify.com/v1/me',
  });
};

export const getPlaybackState = () => {
  return api<SpotifyApi.CurrentPlaybackResponse>({
    method: 'get',
    url: 'https://api.spotify.com/v1/me/player',
  });
};

export const getUserQueue = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/me/player/queue',
  });
};
