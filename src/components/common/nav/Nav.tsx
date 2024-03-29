import { useLocation, useNavigate } from 'react-router-dom';
import {
  CalendarIcon3,
  CalendarIcon2,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from '../icons/Icons';
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
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          className="w-[53.12px] cursor-pointer flex-col items-center justify-center px-2">
          <div className="flex justify-center">
            <HomeIcon
              size={24}
              fill={isActive('/') ? 'currentColor' : 'none'}
            />
          </div>
          <p className="caption1 mt-[2px] text-center font-normal text-gray7">
            홈
          </p>
        </div>

        {isLoggedIn ? (
          <div
            onClick={() => navigate('/mytrip')}
            className="cursor-pointe w-[53.12px] flex-col items-center justify-center px-2">
            <div className="flex justify-center">
              {isActive('/mytrip') ? <CalendarIcon2 /> : <CalendarIcon3 />}
            </div>
            <p className="caption1 mt-[5px] text-center text-xs/[11px] font-normal text-gray7">
              여정
            </p>
          </div>
        ) : (
          <Alert
            title={'로그인'}
            message={
              <>
                여정을 관리하려면 로그인이 필요해요.
                <br />
                로그인하러 가볼까요?
              </>
            }
            onConfirm={handleConfirm}>
            <div className="w-[53.12px] cursor-pointer flex-col items-center justify-center px-2">
              <div className="flex justify-center">
                <CalendarIcon3
                  size={24}
                  fill={isActive('/mytrip') ? '#1E1E1E' : 'none'}
                />
              </div>
              <p className="caption1 mt-[5px] text-center text-xs/[11px] font-normal text-gray7">
                여정
              </p>
            </div>
          </Alert>
        )}

        {isLoggedIn ? (
          <div
            onClick={() => navigate('/wishlist')}
            className="w-[53.12px] cursor-pointer flex-col items-center justify-center px-2">
            <div className="flex justify-center">
              <HeartIcon
                size={24}
                fill={isActive('/wishlist') ? 'currentColor' : 'none'}
              />
            </div>
            <p className="caption1 mt-[4px] whitespace-nowrap text-center text-xs/[11px] font-normal text-gray7">
              관심목록
            </p>
          </div>
        ) : (
          <Alert
            title={'로그인'}
            message={
              <>
                관심 여행지를 관리하려면 로그인이 필요해요.
                <br />
                로그인하러 가볼까요?
              </>
            }
            onConfirm={handleConfirm}>
            <div className="w-[53.12px] cursor-pointer flex-col items-center justify-center px-2">
              <div className="flex justify-center">
                <HeartIcon
                  size={24}
                  fill={isActive('/wishlist') ? 'currentColor' : 'none'}
                />
              </div>
              <p className="caption1 mt-[4px] whitespace-nowrap text-center text-xs/[11px] font-normal text-gray7">
                관심목록
              </p>
            </div>
          </Alert>
        )}

        <div
          onClick={() => navigate('/mypage')}
          className="w-[53.12px] cursor-pointer flex-col items-center justify-center px-1 pt-[1px]">
          <div className="flex justify-center">
            <UserIcon
              size={24}
              fill={isActive('/mypage') ? 'currentColor' : 'none'}
            />
          </div>
          <p className="caption1 mt-[3px] text-center font-normal text-gray7">
            내정보
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
