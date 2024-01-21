import { atom } from 'recoil';

export const visitDateState = atom<{ visitDate: string } | null>({
  key: 'visitDateState',
  default: { visitDate: '' },
});

export const isEditState = atom<boolean>({
  key: 'isEditState',
  default: false,
});
