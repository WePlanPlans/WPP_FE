import { atom } from 'recoil';

export const tripDateState = atom<{
  startDate: Date | null;
  endDate: Date | null;
}>({
  key: 'tripDateState',
  default: { startDate: null, endDate: null },
});
