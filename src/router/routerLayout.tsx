import { Outlet } from 'react-router-dom';
import { Header } from '@components/common/header';
import { Nav } from '@components/common/nav';
import { useLocation } from 'react-router-dom';
import { InputComment } from '@components/common/nav';

const MainLayout = () => {
  const location = useLocation();
  const hideNavPaths = [
    '/signup',
    '/signin',
    '/search',
    '/detail',
    '/reviewPosting',
    '/reviewComment',
    '/create',
  ];
  const showNav = !hideNavPaths.some((path) =>
    location.pathname.includes(path),
  );

  return (
    <div className="mx-auto my-0 flex min-h-[100vh] max-w-[412px] flex-col bg-white ">
      <Header />
      <div className="px-[20px] py-0">
        <Outlet />
      </div>
      {showNav && <Nav />}
      {location.pathname.includes('/reviewComment') && <InputComment />}
    </div>
  );
};

export default MainLayout;
