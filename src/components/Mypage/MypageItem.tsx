import { RightIcon } from '@components/common/icons/Icons';
import { getItem } from '@utils/localStorageFun';
import { useNavigate } from 'react-router-dom';

interface Props {
  link: string;
  children: string;
}

const MypageItem = ({ link, children }: Props) => {
  const navigate = useNavigate();

  const onMypageClick = () => {
    if (getItem('accessToken')) {
      navigate(link);
    } else {
      if (confirm('로그인이 필요해요. 로그인하시겠어요?')) {
        navigate('/login');
      }
    }
  };

  return (
    <button
      onClick={onMypageClick}
      className="flex h-14 w-full items-center justify-between py-2">
      <span className="body3 text-black">{children}</span>
      <RightIcon />
    </button>
  );
};

export default MypageItem;
