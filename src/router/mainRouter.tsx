import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from '@components/common/header';
import { Nav } from '@components/common/nav';
import Main from '@pages/main/main.page';
import { Search } from '@pages/search/search.page';
import Detail from '@pages/detail/detail.page';
import ReviewPosting from '@pages/reviewPosting/reviewPosting.page';
import ReviewComment from '@pages/reviewComment/reviewComment.page';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Signup from '@pages/signup/signup.page';
import Signin from '@pages/signin/signin.page';
import { InputComment } from '@components/common/nav';

export function MainLayout() {
  const location = useLocation();
  const hideNavPaths = [
    '/signup',
    '/signin',
    '/reviewPosting',
    '/reviewComment',
    '/detail',
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
}

const MainRouter = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reviewPosting/:id" element={<ReviewPosting />} />
          <Route path="/reviewComment/:id" element={<ReviewComment />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
