import { atom } from 'recoil';

export const UserInfoState = atom<MemberInfo | null>({
  key: 'UserInfoState',
  default: null,
});
