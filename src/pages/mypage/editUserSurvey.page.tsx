import AuthSurvey from '@components/Auth/AuthSurvey/AuthSurvey';
import { BackBox } from '@components/common';

const EditUserSurvey = () => {
  return (
    <>
      <BackBox showBack>나의 여행 취향 설정</BackBox>
      <div className="mt-8">
        <AuthSurvey path={'/mypage'} />
      </div>
    </>
  );
};

export default EditUserSurvey;
