import Detail from '@pages/detail/detail.page';
import Main from '@pages/main/main.page';
import ReviewComment from '@pages/reviewComment/reviewComment.page';
import ReviewPosting from '@pages/reviewPosting/reviewPosting.page';
import { Search } from '@pages/search/search.page';
import Signin from '@pages/signin/signin.page';
import Signup from '@pages/signup/signup.page';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from './routerLayout';

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
