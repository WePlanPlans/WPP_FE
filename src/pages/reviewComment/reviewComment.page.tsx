import { DetailHeader } from '@components/common/header';
import { DetailReview, ReviewComments, InputComment } from '@components/Review';
const ReviewComment = () => {
  return (
    <>
      <DetailHeader />
      <DetailReview />
      <ReviewComments />
      <InputComment />
    </>
  );
};

export default ReviewComment;
