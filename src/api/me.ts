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

export const getPlaybackQueue = () => {
  return api({
    method: 'get',
    url: 'https://api.spotify.com/v1/me/player/queue',
  });
};

export const putPlaybackPlay = ({ uris, position_ms }: SpotifyApi.PlayParameterObject) => {
  return api({
    method: 'put',
    url: `https://api.spotify.com/v1/me/player/play`,
    data: {
      uris,
      position_ms,
    },
  });
};

export const putPlaybackPause = () => {
  return api({
    method: 'put',
    url: `https://api.spotify.com/v1/me/player/pause`,
  });
};

export const postPlaybackNext = () => {
  return api({
    method: 'post',
    url: `https://api.spotify.com/v1/me/player/next`,
  });
};

export const postPlaybackPrevious = () => {
  return api({
    method: 'post',
    url: `https://api.spotify.com/v1/me/player/previous`,
  });
};

export const postPlaybackQueue = ({ uri }: { uri: string }) => {
  return api({
    method: 'post',
    url: `https://api.spotify.com/v1/me/player/queue`,
    params: {
      uri,
    },
  });
};
