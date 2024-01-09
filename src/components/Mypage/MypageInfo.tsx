import { RightIcon } from '@components/common/icons/Icons';
import { Link } from 'react-router-dom';

const MypageInfo = () => {
  return (
    <Link
      to="/mypage/info"
      className="mb-6 flex h-16 w-full items-center justify-between">
      <div className="flex gap-3">
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
          <img src="http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_110x110.jpg" />
        </div>
        <div className="flex flex-col items-start">
          <span className="title3 mb-1 text-black">은별</span>
          <span className="caption2 mb-2 text-black">
            estarrrr01234@naver.com
          </span>
          <button className="caption2 text-gray4">로그아웃</button>
        </div>
      </div>
      <RightIcon />
    </Link>
  );
};

export default MypageInfo;
