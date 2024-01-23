import { ButtonPrimary } from '@components/common/button/Button';
import { useState, useEffect } from 'react';
import { contentState, keywordsState, ratingState } from '@recoil/review';
import { useRecoilState, useRecoilValue } from 'recoil';

interface ButtonProps {
  onClick: () => void;
}

const ReviewButton = (props: ButtonProps) => {
  const { onClick } = props;
  const [content] = useRecoilState(contentState);
  const keywords = useRecoilValue(keywordsState);
  const rating = useRecoilValue(ratingState);
  const [isContentValid, setIsContentValid] = useState(false);
  const [isKeywordsValid, setIsKeywordsValid] = useState(false);
  const [isRatingValid, setIsRatingValid] = useState(false);

  useEffect(() => {
    if (content.length >= 10) {
      setIsContentValid(true);
    } else if (content.length < 10) {
      setIsContentValid(false);
    }
  }, [content]);

  useEffect(() => {
    if (keywords.length > 0) {
      setIsKeywordsValid(true);
    } else if (keywords.length <= 0) {
      setIsKeywordsValid(false);
    }
  }, [keywords]);

  useEffect(() => {
    if (rating > 0) {
      setIsRatingValid(true);
    } else if (rating <= 0) {
      setIsRatingValid(false);
    }
  }, [rating]);

  return (
    <div className="pb-4">
      {isRatingValid === false && (
        <div className="mb-2 flex items-center justify-center text-xs text-[#FF0F00]">
          별점을 입력해주세요
        </div>
      )}

      {isRatingValid === true &&
        isContentValid === false &&
        isKeywordsValid === false && (
          <div className="mb-2 flex items-center justify-center text-xs text-[#FF0F00]">
            키워드를 선택하거나 텍스트를 10자 이상 입력해주세요
          </div>
        )}

      <ButtonPrimary
        onClick={onClick}
        className="flex items-center justify-center"
        disabled={
          isRatingValid === false ||
          (isContentValid === false && isKeywordsValid === false)
        }>
        완료
      </ButtonPrimary>
    </div>
  );
};

export default ReviewButton;
