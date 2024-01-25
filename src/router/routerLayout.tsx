import { Header } from '@components/common/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from '@components/common/nav';
import { InputComment } from '@components/common/nav';
import '../index.css';
import useGetUserInfo from '@hooks/useGetUserInfo';

const MainLayout = () => {
  const location = useLocation();
  const hideNavPaths = [
    '/signup',
    '/login',
    '/search',
    '/detail',
    '/reviewPosting',
    '/reviewComment',
    '/myPageReview',
    '/info',
    '/survey',
    '/plan',
    '/create',
    '/add',
    '/edit',
  ];
  const showNav = !hideNavPaths.some((path) =>
    location.pathname.includes(path),
  );

  useGetUserInfo();

  return (
    <div className="mx-auto min-h-dvh min-w-[350px] max-w-[412px] bg-white">
      <Header />
      <div className="h-full px-5">
        <Outlet />
      </div>
      {showNav && <Nav />}
      {location.pathname.includes('/reviewComment') && <InputComment />}
    </div>
  );
};

export default MainLayout;
