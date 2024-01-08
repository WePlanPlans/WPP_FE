import { AuthTitle } from '@components/Auth';
import { BackBox } from '@components/common';
import { Link } from 'react-router-dom';

const SignupSurvey = () => {
  return (
    <div className="flex h-[95vh] flex-col">
      <BackBox isShowSkip />
      <AuthTitle
        title={'어떤 여행을 좋아하세요?'}
        subTitle="여행 취향을 골라주세요."
      />
      <Link to="/signup/info">다음</Link>
    </div>
  );
};

export default SignupSurvey;
