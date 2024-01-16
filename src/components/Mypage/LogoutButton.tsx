import { postLogout } from '@api/auth';
import Alert from '@components/common/alert/Alert';
import { UserInfoState } from '@recoil/Auth.atom';
import { removeItem } from '@utils/localStorageFun';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const LogoutButton = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(UserInfoState);

  const onLogoutClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const handleConfirm = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    try {
      const res = await postLogout();
      if (res.data === 'LOGOUT!') {
        setUserInfo(null);
        removeItem('accessToken');
        navigate('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <Alert
      title="로그아웃"
      message="로그아웃 하시겠어요?"
      onConfirm={handleConfirm}
      onCancel={handleCancel}>
      <button onClick={onLogoutClick} className="caption2 text-gray4">
        로그아웃
      </button>
    </Alert>
  );
};

export default LogoutButton;
