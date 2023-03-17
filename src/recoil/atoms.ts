import { atom } from 'recoil';

export const searchValueState = atom({
  key: 'searchValueState',
  default: '',
});

export const searchQueryState = atom({
  key: 'searchQueryState',
  default: '',
});

export const loginDataState = atom<SpotifyApi.UserProfileResponse | null>({
  key: 'loginDataState',
  default: null,
});

export const playbackDataState = atom<SpotifyApi.CurrentPlaybackResponse | null>({
  key: 'playbackDataState',
  default: null,
});
