import { ButtonPrimary } from '@components/common/button/Button';
import { ratingState } from '@recoil/review';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

interface ButtonProps {
  onClick: () => void;
}

const ReviewButton = (props: ButtonProps) => {
  const { onClick } = props;
  const rating = useRecoilValue(ratingState);
  const [isRatingValid, setIsRatingValid] = useState(false);

  useEffect(() => {
    if (rating > 0) {
      setIsRatingValid(true);
    } else if (rating <= 0) {
      setIsRatingValid(false);
    }
  }, [rating]);

  return (
    <div className=" bottom-0  mt-auto flex w-full items-center justify-center pb-4">
      {/* {isRatingValid === true &&
        isContentValid === false &&
        isKeywordsValid === false && (
          <div className="mb-2 flex items-center justify-center text-xs text-[#FF0F00]">
            키워드를 선택하거나 텍스트를 10자 이상 입력해주세요
          </div>
        )} */}

      <ButtonPrimary
        onClick={onClick}
        className="flex h-[56px] items-center justify-center"
        disabled={isRatingValid === false}>
        완료
      </ButtonPrimary>
    </div>
  );
};

export default ReviewButton;
