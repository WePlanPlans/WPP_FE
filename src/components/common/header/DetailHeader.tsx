import { commentState } from '@recoil/review';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { BackIcon } from '../icons/Icons';

export default function DetailHeader() {
  const navigate = useNavigate();
  const setComment = useSetRecoilState(commentState);

  const goBack = () => {
    navigate(-1);
    setComment('');
  };

  return (
    <header className="mb-[18px] flex">
      <div onClick={goBack} className=" flex cursor-pointer items-center">
        <BackIcon />
      </div>
    </header>
  );
}
