import { postSignup } from '@api/auth';
import {
  AuthEmailInputBox,
  AuthPwInputBox,
  AuthPwCheckInputBox,
} from '@components/Auth';
import SubmitBtn from '@components/common/button/SubmitBtn';
import { SubmitHandler, useForm } from 'react-hook-form';

const Signup = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    resetField,
    setError,
    formState: { errors, isValid },
  } = useForm<SignupFormValue>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  // const navigate = useNavigate();

  const onSignupSubmit: SubmitHandler<SignupFormValue> = async (data) => {
    const { email, password } = data;

    try {
      const res = await postSignup({
        email,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        // TODO 서지수 | 회원가입 로직 수정 후 취향 입력 페이지 또는 회원가입 완료 페이지로 이동기
        // navigate('/signup/survey');
      }
    } catch (err) {
      console.error('회원가입 요청 중 에러 발생', err);
    }
  };

  return (
    <div className="flex h-[95vh] flex-col ">
      <h1 className="title1 my-11">
        위플플 이용을 위해
        <br />
        회원가입을 해주세요
      </h1>
      <form
        onSubmit={handleSubmit(onSignupSubmit)}
        className="flex h-full flex-col">
        <AuthEmailInputBox
          register={register}
          inputValue={watch('email')}
          resetField={resetField}
          errors={errors}
          setError={setError}
        />
        <AuthPwInputBox
          register={register}
          inputValue={watch('password')}
          resetField={resetField}
          errors={errors}
        />
        <AuthPwCheckInputBox
          register={register}
          getValues={getValues}
          inputValue={watch('passwordCheck')}
          resetField={resetField}
          errors={errors}
        />

        <div className="mt-auto">
          <SubmitBtn isActive={isValid}>완료</SubmitBtn>
        </div>
      </form>
    </div>
  );
};

export default Signup;
