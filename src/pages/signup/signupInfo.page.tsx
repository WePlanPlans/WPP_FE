import { AuthTitle } from '@components/Auth';
import SignupInfoForm from '@components/Auth/SignupInfo/SignupInfoForm';
import { BackBox } from '@components/common';
import { ProgressBarIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';

const SignupInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-[95vh] flex-col">
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
      <div className="absolute right-0 top-12">
        <ProgressBarIcon full />
      </div>
      <AuthTitle
        title={
          <>
            프로필 사진과 닉네임을
            <br />
            설정해주세요.
          </>
        }
      />
      <SignupInfoForm />
    </div>
  );
};

export default SignupInfo;
