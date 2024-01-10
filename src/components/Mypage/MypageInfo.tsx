import { RightIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useRecoilValue } from 'recoil';
import { UserInfoState } from '@recoil/Auth.atom';
import useGetUserInfo from '@hooks/useGetUserInfo';

const MypageInfo = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(UserInfoState);
  useGetUserInfo();

  return (
    <button
      onClick={() => {
        navigate(userInfo ? '/mypage/info' : '/login');
      }}
      className="mb-6 flex h-16 w-full items-center justify-between">
      <div className="flex gap-3">
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
          <img
            src={
              userInfo?.profileImageUrl
                ? userInfo.profileImageUrl
                : 'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_110x110.jpg'
            }
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          {userInfo ? (
            <>
              <span className="title3 mb-1 text-black">
                {userInfo.nickname}
              </span>
              <span className="caption2 mb-2 text-black">{userInfo.email}</span>
              <LogoutButton />
            </>
          ) : (
            <div className="title3 text-gray7">로그인을 해주세요</div>
          )}
        </div>
      </div>
      <RightIcon />
    </button>
  );
};

export default MypageInfo;
