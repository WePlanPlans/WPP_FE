import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from '@components/common/header';
import { Nav } from '@components/common/nav';
import Main from '@pages/main/main.page';
import Detail from '@pages/detail/detail.page';
import { Signup } from '@pages/index';
import PostingReview from '@pages/postingReview/postingReview.page';
import Signin from '@pages/signin/signin.page';
import SignupInfo from '@pages/signupInfo/signupInfo.page';

export function MainLayout() {
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/info" element={<SignupInfo />} />
          <Route path="/postingReview/:id" element={<PostingReview />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
