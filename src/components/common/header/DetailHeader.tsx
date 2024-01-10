import { useNavigate } from 'react-router-dom';
import { BackIcon } from '../icons/Icons';
import { commentState } from '@recoil/review';
import { useSetRecoilState } from 'recoil';

export default function DetailHeader() {
  const navigate = useNavigate();
  const setComment = useSetRecoilState(commentState);

  const goBack = () => {
    navigate(-1);
    setComment('');
  };

  return (
    <header className="mb-4 flex">
      <div
        onClick={goBack}
        className=" flex cursor-pointer items-center px-3 py-2">
        <BackIcon />
      </div>
    </header>
  );
}
