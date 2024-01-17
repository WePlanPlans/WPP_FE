import { atom } from 'recoil';

type Participant = {
  memberId: number;
  nickname: string;
  thumbnail: string;
};

export type Participants = {
  tripSurveyMemberCount: number;
  tripSurveySetMemberInfos: Participant[];
  nonTripSurveySetMemberInfos: Participant[];
};

export const participantsState = atom<Participants>({
  key: 'participantsState',
  default: {
    tripSurveyMemberCount: 0,
    tripSurveySetMemberInfos: [],
    nonTripSurveySetMemberInfos: [],
  },
});
