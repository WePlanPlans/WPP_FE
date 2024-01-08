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
    <header className="relative mb-5 flex w-full items-center justify-start gap-2.5 bg-white px-1">
      <BackIcon onClick={goBack} />
    </header>
  );
}
