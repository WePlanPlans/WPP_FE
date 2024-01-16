import Alert from '@components/common/alert/Alert';
import { RightIcon } from '@components/common/icons/Icons';
import { getItem } from '@utils/localStorageFun';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  link: string;
  children: string;
}

const MypageItem = ({ link, children }: Props) => {
  const navigate = useNavigate();
  const isLogin = getItem('accessToken');

  const handleConfirm = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    navigate('/login');
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {isLogin ? (
        <Link
          to={link}
          className="flex h-14 w-full items-center justify-between py-2">
          <span className="body3 text-black">{children}</span>
          <RightIcon />
        </Link>
      ) : (
        <Alert
          title="로그인"
          message={
            <>
              조회 시 로그인이 필요합니다.
              <br />
              로그인 하시겠습니까?
            </>
          }
          onConfirm={handleConfirm}
          onCancel={handleCancel}>
          <button className="flex h-14 w-full items-center justify-between py-2">
            <span className="body3 text-black">{children}</span>
            <RightIcon />
          </button>
        </Alert>
      )}
    </>
  );
};

export default MypageItem;
