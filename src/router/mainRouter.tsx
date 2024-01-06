import { Route, Routes } from 'react-router-dom';
import Main from '@pages/main/main.page';
import { Search } from '@pages/search/search.page';
import Detail from '@pages/detail/detail.page';
import ReviewPosting from '@pages/reviewPosting/reviewPosting.page';
import ReviewComment from '@pages/reviewComment/reviewComment.page';
import MainLayout from './routerLayout';

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
