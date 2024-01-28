import { atom } from 'recoil';

export const dayState = atom<string[]>({
  key: 'dayState',
  default: [''],
});

export const dateState = atom<string[]>({
  key: 'dateState',
  default: [''],
});

export const tapState = atom<string>({
  key: 'tapState',
  default: '',
});

export const isFirstLoadState = atom({
  key: 'isFirstLoadState',
  default: true,
});
