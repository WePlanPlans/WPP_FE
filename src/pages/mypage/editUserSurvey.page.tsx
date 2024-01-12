import AuthSurvey from '@components/Auth/AuthSurvey/AuthSurvey';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';

const EditUserSurvey = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackBox
        showBack
        backHandler={() => {
          navigate('/mypage');
        }}>
        나의 여행 취향 설정
      </BackBox>
      <div className="mt-8">
        <AuthSurvey path={'/mypage'} />
      </div>
    </>
  );
};

export default EditUserSurvey;
