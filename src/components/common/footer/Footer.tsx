import { useLocation, useNavigate } from 'react-router-dom';
import { CalendarIcon, HeartIcon, HomeIcon, UserIcon } from '../icons/Icons';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <footer
      className="
    bg-lightgray sticky bottom-0 flex h-16 items-center justify-center">
      <nav className="flex w-[90%] items-center justify-between space-x-4">
        <div
          onClick={() => navigate('/')}
          className="flex-col items-center justify-center hover:cursor-pointer">
          <div className="flex justify-center">
            <HomeIcon fill={isActive('/') ? 'currentColor' : 'none'} />
          </div>
          <p className="mt-2 text-center text-xs/[11px]">홈</p>
        </div>
        <div
          onClick={() => navigate('/')}
          className="flex-col items-center justify-center hover:cursor-pointer">
          <CalendarIcon />
          <p className="mt-2 text-center text-xs/[11px]">일정</p>
        </div>
        <div
          onClick={() => navigate('/')}
          className="flex-col items-center justify-center hover:cursor-pointer">
          <div className="flex justify-center">
            <HeartIcon />
          </div>
          <p className="mt-2 text-center text-xs/[11px]">찜</p>
        </div>
        <div
          onClick={() => navigate('/')}
          className="flex-col items-center justify-center hover:cursor-pointer">
          <div className="flex justify-center">
            <UserIcon />
          </div>
          <p className="mt-2 text-center text-xs/[11px]">내정보</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
