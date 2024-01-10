import { postLogout } from '@api/auth';

const LogoutButton = () => {
  const onLogoutClick = async () => {
    try {
      const res = await postLogout();
      if (res.data === 'LOGOUT!') {
        window.localStorage.removeItem('accessToken');
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
