import { useLocation, useNavigate } from 'react-router-dom';
import { CalendarIcon, HeartIcon, HomeIcon, UserIcon } from '../icons/Icons';
import { useEffect, useState } from 'react';
import Alert from '../alert/Alert';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleConfirm = () => {
    navigate('/login');
  };

  return (
    <nav className="sticky bottom-0 z-50 mt-auto flex h-16 items-center justify-center bg-white">
      <div className="flex w-[100%] items-center justify-evenly space-x-4 bg-inherit">
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex-col items-center justify-center px-2">
          <div className="flex justify-center">
            <HomeIcon fill={isActive('/') ? 'currentColor' : 'none'} />
          </div>
          <p className="caption1 mt-[3px] pr-[1px] text-center">홈</p>
        </div>
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer flex-col items-center justify-center px-2">
          <CalendarIcon />
          <p className="caption1 mt-[5px] text-center text-xs/[11px]">일정</p>
        </div>

        {isLoggedIn ? (
          <div
            onClick={() => navigate('/wishList')}
            className="cursor-pointer flex-col items-center justify-center px-2">
            <div className="flex justify-center">
              <HeartIcon
                fill={isActive('/wishList') ? 'currentColor' : 'none'}
              />
            </div>
            <p className="caption1 mt-[4px] text-center text-xs/[11px]">
              관심목록
            </p>
          </div>
        ) : (
          <Alert
            title={'로그인'}
            message={
              <>
                관심 여행지 조회를 위해 로그인이 필요합니다.
                <br />
                로그인 하시겠습니까?
              </>
            }
            onConfirm={handleConfirm}>
            <div className="cursor-pointer flex-col items-center justify-center px-2">
              <div className="flex justify-center">
                <HeartIcon
                  fill={isActive('/wishList') ? 'currentColor' : 'none'}
                />
              </div>
              <p className="caption1 mt-[4px] text-center text-xs/[11px]">
                관심목록
              </p>
            </div>
          </Alert>
        )}

        <div
          onClick={() => navigate('/mypage')}
          className="cursor-pointer flex-col items-center justify-center px-1">
          <div className="flex justify-center">
            <UserIcon />
          </div>
          <p className="caption1 mt-[3px] text-center ">내정보</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
