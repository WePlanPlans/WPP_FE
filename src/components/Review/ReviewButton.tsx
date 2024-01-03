import { ButtonPrimary } from '@components/common/button/Button';
import { useState, useEffect, ChangeEvent } from 'react';
import { contentState, keywordsState } from '@recoil/review';
import { useRecoilState, useRecoilValue } from 'recoil';

interface ButtonProps {
  onClick: () => void;
}

const ReviewButton = (props: ButtonProps) => {
  const { onClick } = props;
  const [content, setContent] = useRecoilState(contentState);
  const keywords = useRecoilValue(keywordsState);
  const [isContentValid, setIsContentValid] = useState(false);
  const [isKeywordsValid, setIsKeywordsValid] = useState(false);

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

  return (
    <>
      {isContentValid === false && isKeywordsValid === false && (
        <div className="mb-2 flex items-center justify-center text-xs text-[#FF0F00]">
          키워드를 선택하거나 텍스트를 10자 이상 입력해주세요
        </div>
      )}

      <ButtonPrimary
        onClick={onClick}
        disabled={isContentValid === false && isKeywordsValid === false}>
        완료
      </ButtonPrimary>
    </>
  );
};

export default ReviewButton;
