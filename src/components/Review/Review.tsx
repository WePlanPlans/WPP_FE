import ReviewButton from './ReviewButton';
import ReviewKeyword from './ReviewKeyword';
import ReviewPosting from './ReviewPosting';
import ReviewRating from './ReviewRating';

export default function Review() {
  return (
    <>
      <ReviewRating />
      <ReviewKeyword />
      <ReviewPosting />
      <ReviewButton />
    </>
  );
}
