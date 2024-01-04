import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from '@components/common/header';
import { Nav } from '@components/common/nav';
import Main from '@pages/main/main.page';
import { Search } from '@pages/search/search.page';
import Detail from '@pages/detail/detail.page';
import { useEffect } from 'react';
import { ReviewPosting } from '@components/Review';

export function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="mx-auto my-0 flex min-h-[100vh] max-w-[412px] flex-col bg-white ">
      <Header />
      <div className="mb-auto px-[20px] py-0">
        <Outlet />
      </div>
      <Nav />
    </div>
  );
}

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reviewPosting/:id" element={<ReviewPosting />} />
          <Route path="/reviewComment/:id" element={<ReviewComment />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
