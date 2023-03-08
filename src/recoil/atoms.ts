import { atom } from 'recoil';

export const searchValueState = atom({
  key: 'searchValueState',
  default: '',
});

export const searchQueryState = atom({
  key: 'searchQueryState',
  default: '',
});
