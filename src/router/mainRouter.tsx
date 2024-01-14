import { Route, Routes } from 'react-router-dom';
import Main from '@pages/main/main.page';
import { Search } from '@pages/search/search.page';
import Detail from '@pages/detail/detail.page';
import ReviewComment from '@pages/reviewComment/reviewComment.page';
import ReviewPosting from '@pages/reviewPosting/reviewPosting.page';
import WishList from '@pages/wishList/wishList.page';
import MyTripPage from '@pages/myTrip/myTrip.page';
import MyPageReview from '@pages/myPageReview/myPageReview.page';
import { Signup, SignupSuccess, SignupSurvey, SignupInfo } from '@pages/signup';
import { Login, LoginKakao } from '@pages/login';
import {
  EditPassword,
  EditUserInfo,
  EditUserSurvey,
  Mypage,
} from '@pages/mypage';
import useGetUserInfo from '@hooks/useGetUserInfo';
import MainLayout from './routerLayout';
import { CreateTrip } from '@pages/create/createTrip.page';

const MainRouter = () => {
  useGetUserInfo();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reviewPosting/:id" element={<ReviewPosting />} />
          <Route path="/reviewComment/:id" element={<ReviewComment />} />
          <Route path="/create" element={<CreateTrip />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/mytrip" element={<MyTripPage />} />
          <Route path="/myPageReview" element={<MyPageReview />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/success" element={<SignupSuccess />} />
          <Route path="/signup/survey" element={<SignupSurvey />} />
          <Route path="/signup/info" element={<SignupInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/kakao" element={<LoginKakao />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/survey" element={<EditUserSurvey />} />
          <Route path="/mypage/info" element={<EditUserInfo />} />
          <Route path="/mypage/info/password" element={<EditPassword />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
