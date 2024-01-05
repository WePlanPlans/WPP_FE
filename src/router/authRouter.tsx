import { Route, Routes } from 'react-router-dom';
import AuthLayout from './authLayout';
import { Signup, SignupInfo } from '@pages/signup';
import { Login } from '@pages/index';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<SignupInfo />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
