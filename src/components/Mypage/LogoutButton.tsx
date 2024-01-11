import { postLogout } from '@api/auth';
import { UserInfoState } from '@recoil/Auth.atom';
import { removeItem } from '@utils/localStorageFun';
import { useSetRecoilState } from 'recoil';

const LogoutButton = () => {
  const setUserInfo = useSetRecoilState(UserInfoState);

  const onLogoutClick = async (e: any) => {
    e.stopPropagation();
    if (confirm('로그아웃 하시겠습니까?')) {
      try {
        const res = await postLogout();
        if (res.data === 'LOGOUT!') {
          setUserInfo(null);
          removeItem('accessToken');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <button onClick={onLogoutClick} className="caption2 text-gray4">
      로그아웃
    </button>
  );
};

export default LogoutButton;
