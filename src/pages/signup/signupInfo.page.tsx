import { AuthTitle } from '@components/Auth';
import UserInfoForm from '@components/Auth/SignupInfo/UserInfoForm';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';

const SignupInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[95vh] flex-col">
      <BackBox
        showBack
        backHandler={() => {
          navigate('/signup/survey');
        }}
        showSkip
        skipHandler={() => {
          navigate('/');
        }}
      />
      <AuthTitle
        title={
          <>
            프로필 사진과 닉네임을
            <br />
            설정해주세요.
          </>
        }
      />
      <UserInfoForm />
    </div>
  );
};

export default SignupInfo;
