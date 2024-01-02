import ReviewButton from './ReviewButton';
import ReviewKeyword from './ReviewKeyword';
import ReviewPosting from './ReviewPosting';
import ReviewRating from './ReviewRating';
import { postReview } from '@api/review';
import { ratingState, keywordsState, contentState } from '@recoil/review';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Review() {
  const params = useParams();
  const tourId = Number(params.id);
  const [rating, setRating] = useRecoilState(ratingState);
  const [keywords, setKeywords] = useRecoilState(keywordsState);
  const [content, setContent] = useRecoilState(contentState);

  const handlePostReview = async () => {
    try {
      const reviewData = {
        tourItemId: tourId,
        rating: rating,
        keywords: keywords,
        content: content,
      };
      const response = await axios.post('/api/reviews', reviewData);
      console.log('리뷰가 성공적으로 등록되었습니다.', response.data);
      setRating(0);
      setKeywords([]);
      setContent('');
    } catch (error) {
      console.error('리뷰 등록 중 오류 발생:', error);
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
