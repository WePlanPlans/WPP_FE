export interface Keyword {
  keywordId: number;
  content: string;
  type: string;
}

export interface CommentItemProps {
  commentId: number;
  authorNickname: string;
  authorProfileImageUrl: string;
  createdTime: string;
  content: string;
  onClick?: () => void;
  isAuthor: boolean;
}

export interface MyReviewContent {
  reviewId: number;
  authorNickname: string;
  authorProfileImageUrl: string;
  rating: number;
  createdTime: string;
  content: string;
  keywords: Keyword[];
  commentCount: number;
  isAuthor?: boolean;
}
