import { atom } from 'recoil';

export const tripIdState = atom<string | null>({
  key: 'tripIdState',
  default: '1',
});

export const visitDateState = atom<{ visitDate: string } | null>({
  key: 'visitDateState',
  default: { visitDate: '2024-01-05' },
});

export const memberIdState = atom<{ memberId: number } | null>({
  key: 'memberIdState',
  default: { memberId: 1 },
});
