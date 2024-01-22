import { Header } from '@components/common/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from '@components/common/nav';
import { InputComment } from '@components/common/nav';
import '../index.css';

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
    '/trip',
    '/create',
  ];
  const showNav = !hideNavPaths.some((path) =>
    location.pathname.includes(path),
  );

  return (
    <div className="mx-auto h-dvh max-w-[412px] bg-white">
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
