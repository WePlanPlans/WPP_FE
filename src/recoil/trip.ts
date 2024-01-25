import { atom } from 'recoil';

export const participantsState = atom<Participants>({
  key: 'participantsState',
  default: {
    tripSurveyMemberCount: 0,
    tripSurveySetMemberInfos: [],
    nonTripSurveySetMemberInfos: [],
  },
});
