import SubmitBtn from '@components/common/button/SubmitBtn';
import { SuccessIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';

const SignupSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[85vh] flex-col justify-between">
      <div className="mt-40 flex flex-col items-center">
        <div className="mb-6">
          <SuccessIcon />
        </div>
        <h1 className="title1 mb-3 text-center text-main1">
          만나서 반가워요!
          <br />
          가입이 완료되었어요.
        </h1>
        <span className="body6 text-center leading-5 text-gray4">
          위플랜플랜스에서 여행 계획을 세워볼까요?
          <br />
          여행 취향과 프로필을 등록하면 도움이 될 거예요.
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <SubmitBtn
          onClick={() => {
            navigate('/signup/survey');
          }}
          type="button">
          추가정보 등록하기
        </SubmitBtn>
        <SubmitBtn
          onClick={() => {
            navigate('/');
          }}
          type="button"
          outline>
          홈으로 이동
        </SubmitBtn>
      </div>
    </div>
  );
};

export default SignupSuccess;
