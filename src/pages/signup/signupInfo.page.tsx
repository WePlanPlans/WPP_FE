import { AuthTitle } from '@components/Auth';
import { BackBox } from '@components/common';
import { Link } from 'react-router-dom';

const SignupInfo = () => {
  return (
    <div className="flex h-[95vh] flex-col">
      <BackBox isShowSkip />
      <AuthTitle
        title={
          <>
            프로필 사진과 닉네임을
            <br />
            설정해주세요.
          </>
        }
      />
      <Link to="/">완료</Link>
    </div>
  );
};

export default SignupInfo;
