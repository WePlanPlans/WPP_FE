interface Keyword {
  keywordId: number;
  content: string;
  type?: string;
}

interface CommentItemProps {
  commentId: number;
  authorNickname: string;
  authorProfileImageUrl: string;
  createdTime: string;
  content: string;
  onClick?: () => void;
  isAuthor: boolean;
}

interface MyReviewContent {
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

interface ReviewRequest {
  tourItemId: number;
  rating: number;
  keywords: Keyword[];
  content: string;
}
