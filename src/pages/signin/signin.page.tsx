import { postEmailLogin } from '@api/auth';
import SubmitBtn from '@components/common/button/SubmitBtn';
import Back from '@components/common/back/Back';
import { KakaoIcon, LogoIcon } from '@components/common/icons/Icons';
import { UserInputBox } from '@components/user';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get('email');
    const pwValue = formData.get('pw');

    const res = await postEmailLogin({
      email: emailValue as string,
      password: pwValue as string,
    });

    if (res.data.status === 200) {
      window.localStorage.setItem(
        'accessToken',
        res.data.data.tokenInfo.accessToken,
      );
      navigate('/');
    }
  };
  return (
    <div>
      <Back />
      <div className="mb-auto">
        <div className="mb-16 mt-14 flex flex-col items-center">
          <div className="mb-2">
            <LogoIcon />
          </div>
          <h1 className="body6 text-gray6">
            위플랜플랜즈에 오신 것을 환영합니다.
          </h1>
        </div>
        <form className="mb-auto" onSubmit={handleSubmit}>
          <UserInputBox
            label={'이메일'}
            type="email"
            name="email"
            placeholder={'이메일을 입력하세요'}
          />
          <UserInputBox
            label={'비밀번호'}
            name="pw"
            placeholder={'비밀번호를 입력하세요'}
          />
          <SubmitBtn>로그인</SubmitBtn>
        </form>
      </div>

      <div>
        <div className="body6 mb-5 flex h-4 items-center gap-4 text-gray4">
          <hr className="flex-auto" />
          또는
          <hr className="flex-auto" />
        </div>
        <button className="body3 mb-2 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#fee304] p-2 text-['#3B1E1E']">
          <KakaoIcon />
          카카오로 로그인
        </button>

        <SubmitBtn outline type="button">
          회원가입
        </SubmitBtn>
      </div>
    </div>
  );
};

export default Signin;
