import { atom } from 'recoil';

export const tripIdState = atom<string | null>({
  key: 'tripIdState',
  default: null,
});

export const visitDateState = atom<string | null>({
  key: 'visitDateState',
  default: null,
});
