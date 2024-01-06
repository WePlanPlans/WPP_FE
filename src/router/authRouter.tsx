import { Route, Routes } from 'react-router-dom';
import Signup from '@pages/signup/signup.page';
import Signin from '@pages/signin/signin.page';
import MainLayout from './routerLayout';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
