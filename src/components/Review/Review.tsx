import ReviewButton from './ReviewButton';
import ReviewKeyword from './ReviewKeyword';
import ReviewPosting from './ReviewPosting';
import ReviewRating from './ReviewRating';
import { postReview, putReview } from '@api/review';
import {
  ratingState,
  keywordsState,
  contentState,
  isModifyingReviewState,
  targetReviewIdState,
} from '@recoil/review';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

export default function Review() {
  const params = useParams();
  const tourItemId = Number(params.id);
  const [rating, setRating] = useRecoilState(ratingState);
  const [keywords, setKeywords] = useRecoilState(keywordsState);
  const [content, setContent] = useRecoilState(contentState);
  const isModifyingReview = useRecoilValue(isModifyingReviewState);
  const targetReviewId = useRecoilValue(targetReviewIdState);

  const handlePostReview = async () => {
    try {
      const reviewData = {
        tourItemId: tourItemId,
        rating: rating,
        keywords: keywords,
        content: content,
      };
      if (isModifyingReview) {
        const response = await putReview(reviewData, targetReviewId);
        console.log('리뷰가 성공적으로 수정되었습니다.', response.data);
      } else {
        const response = await postReview(reviewData);
        console.log('리뷰가 성공적으로 등록되었습니다.', response.data);
      }
    } catch (error) {
      console.error(
        `리뷰 ${isModifyingReview ? '수정' : '등록'} 중 오류 발생:`,
        error,
      );
    }
  };

  return (
    <>
      <ReviewRating />
      <ReviewKeyword />
      <ReviewPosting />
      <ReviewButton onClick={handlePostReview} />
    </>
  );
}
