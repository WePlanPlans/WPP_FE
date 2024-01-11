import { useNavigate } from 'react-router-dom';
import { BackIcon } from '../icons/Icons';
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
    <header className="mb-4 flex items-center ">
      <div
        onClick={goBack}
        className=" flex cursor-pointer items-center px-3 py-2">
        <BackIcon />
      </div>
      <div className="flex-grow pr-9 text-center text-sm font-bold">

        리뷰 쓰기
      </div>
    </header>
  );
}
