import { atom } from 'recoil';

interface ReviewRequest {
  tourItemId: number;
  rating: number;
  keywords: Keyword[];
  content: string;
}

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

export const reviewDataState = atom<ReviewRequest>({
  key: 'reviewDataState',
  default: {
    tourItemId: 0,
    rating: 0,
    keywords: [],
    content: '',
  },
});

export const targetCommentIdState = atom({
  key: 'targetCommentIdState',
  default: 0,
});

export const commentContentState = atom({
  key: 'commentContentState',
  default: '',
});

export const isModifyingReviewState = atom({
  key: 'isModifyingReviewState',
  default: false,
});

export const isModifyingCommentState = atom({
  key: 'isModifyingCommentState',
  default: false,
});

export const tourItemIdState = atom({
  key: 'tourItemIdState',
  default: 0,
});
export const contentTypeIdState = atom({
  key: 'contentTypeIdState',
  default: 0,
});
export const alertState = atom({
  key: 'alertState',
  default: {
    isAlert: false,
    noun: '',
    verb: '',
  },
});
