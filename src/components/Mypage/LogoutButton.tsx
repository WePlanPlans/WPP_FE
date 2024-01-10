import { postLogout } from '@api/auth';
import { removeItem } from '@utils/localStorageFun';

const LogoutButton = () => {
  const onLogoutClick = async () => {
    try {
      const res = await postLogout();
      if (res.data === 'LOGOUT!') {
        removeItem('accessToken');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={onLogoutClick} className="caption2 text-gray4">
      로그아웃
    </button>
  );
};

export default LogoutButton;
