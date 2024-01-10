import { AuthTitle } from '@components/Auth';
import { BackBox } from '@components/common';
import AuthSurvey from '@components/Auth/AuthSurvey/AuthSurvey';
import { useNavigate } from 'react-router-dom';
import { ProgressBarIcon } from '@components/common/icons/Icons';

const SignupSurvey = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-full flex-col">
      <BackBox
        showSkip
        skipHandler={() => {
          navigate('/signup/info');
        }}
      />
      <div className="absolute right-0 top-12">
        <ProgressBarIcon />
      </div>
      <AuthTitle
        title={'어떤 여행을 좋아하세요?'}
        subTitle="여행 취향을 골라주세요."
      />
      <AuthSurvey path="/signup/info" />
    </div>
  );
};

export default SignupSurvey;
