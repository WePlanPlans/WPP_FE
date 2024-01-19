import { atom } from 'recoil';

export const tripIdState = atom<string | null>({
  key: 'tripIdState',
  default: '1',
});

export const visitDateState = atom<{ visitDate: string } | null>({
  key: 'visitDateState',
  default: { visitDate: '2024-01-03' },
});

export const memberIdState = atom<{ token: number | null }>({
  key: 'memberIdState',
  default: { token: null },
});
