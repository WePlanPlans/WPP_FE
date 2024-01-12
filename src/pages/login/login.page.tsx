import BackBox from '@components/common/BackBox/BackBox';
import {
  AuthButtonsWrapper,
  LoginForm,
  LoginLogo,
} from '@components/Auth/Login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[93vh] flex-col justify-between">
      <div>
        <BackBox
          showBack
          backHandler={() => {
            navigate(-1);
          }}
        />
        <LoginLogo />
        <LoginForm />
      </div>
      <AuthButtonsWrapper />
    </div>
  );
};

export default Login;
