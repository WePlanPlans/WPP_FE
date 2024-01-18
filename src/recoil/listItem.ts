import { atom } from 'recoil';

export const selectedItemsState = atom<number[]>({
  key: 'selectedItemsState',
  default: [],
});
