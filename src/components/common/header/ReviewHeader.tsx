import { useNavigate } from 'react-router-dom';
import { LeftIcon } from '../icons/Icons';
import { useSetRecoilState } from 'recoil';
import { ratingState, keywordsState, contentState } from '@recoil/review';

export default function ReviewHeader() {
  const navigate = useNavigate();
  const setRating = useSetRecoilState(ratingState);
  const setKeywords = useSetRecoilState(keywordsState);
  const setContent = useSetRecoilState(contentState);

  const goBack = () => {
    navigate(-1);
    setRating(0);
    setKeywords([]);
    setContent('');
  };

  return (
    <header className="flex h-6 h-[48px] w-full items-center pl-1">
      <div className="flex items-center">
        <LeftIcon className="cursor-pointer" onClick={goBack} />
      </div>
      <div className="flex-grow pr-5 text-center text-sm font-bold">
        리뷰 쓰기
      </div>
    </header>
  );
}
