import ReviewItem from '@components/DetailSectionBottom/ReviewItem';

import { useLocation } from 'react-router-dom';

export default function DetailReview() {
  const location = useLocation();
  const { state } = location;
  const { item } = state;

  return (
    <div className="mb-6 ">
      <ReviewItem
        key={item.reviewId}
        reviewId={item.reviewId}
        authorNickname={item.authorNickname}
        authorProfileImageUrl={item.authorProfileImageUrl}
        rating={item.rating}
        createdTime={item.createdTime}
        content={item.content}
        keywords={item.keywords} // keywordId, content, type
        commentCount={item.commentCount}
      />
    </div>
  );
}
