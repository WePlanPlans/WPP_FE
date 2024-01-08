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
  toastPopUpState,
} from '@recoil/review';
import { isModalOpenState } from '@recoil/modal';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useParams, useNavigate } from 'react-router-dom';

export default function Review() {
  const params = useParams();
  const navigate = useNavigate();
  const tourItemId = Number(params.id);
  const [rating, setRating] = useRecoilState(ratingState);
  const [keywords, setKeywords] = useRecoilState(keywordsState);
  const [content, setContent] = useRecoilState(contentState);
  const isModifyingReview = useRecoilValue(isModifyingReviewState);
  const targetReviewId = useRecoilValue(targetReviewIdState);
  const [_, setIsModalOpen] = useRecoilState(isModalOpenState);
  const setToastPopUp = useSetRecoilState(toastPopUpState);

  const handlePostReview = async () => {
    try {
      const reviewData = {
        tourItemId: tourItemId,
        rating: rating,
        keywords: keywords,
        content: content,
      };
      if (isModifyingReview) {
        await putReview(reviewData, targetReviewId);
        setToastPopUp(() => ({
          isPopUp: true,
          noun: '리뷰',
          verb: '수정',
        }));
      } else {
        await postReview(reviewData);
        setToastPopUp(() => ({
          isPopUp: true,
          noun: '리뷰',
          verb: '등록',
        }));
      }
      setRating(0);
      setKeywords([]);
      setContent('');
      setIsModalOpen(false);
      navigate(`/detail/${tourItemId}`);
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
