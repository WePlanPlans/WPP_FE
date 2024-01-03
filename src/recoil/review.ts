import { atom } from 'recoil';

type Keyword = {
  keywordId: number;
  content: string;
};

export const ratingState = atom({
  key: 'ratingState',
  default: 0,
});

export const keywordsState = atom<Keyword[]>({
  key: 'keywordsState',
  default: [],
});

export const contentState = atom({
  key: 'contentState',
  default: '',
});

export const commentState = atom({
  key: 'commentState',
  default: '',
});

export const targetReviewIdState = atom({
  key: 'targetReviewIdState',
  default: 0,
});

export const targetCommentIdState = atom({
  key: 'targetCommentIdState',
  default: 0,
});
