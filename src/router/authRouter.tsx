import { Routes, Route } from 'react-router-dom';
import MainLayout from './mainLayout';
import { Signup, SignupInfo } from '@pages/signup';
import { Login } from '@pages/index';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/info" element={<SignupInfo />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
