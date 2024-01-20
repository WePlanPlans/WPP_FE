import { atom } from 'recoil';

export const tripIdState = atom<string | null>({
  key: 'tripIdState',
  default: '',
});

export const visitDateState = atom<{ visitDate: string } | null>({
  key: 'visitDateState',
  default: { visitDate: '' },
});
