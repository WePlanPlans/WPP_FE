import type { SignupFormValue } from '@/@types/auth.types';
import { postSignup } from '@api/auth';
import {
  AuthTitle,
  AuthEmailInputBox,
  AuthPwInputBox,
  AuthPwCheckInputBox,
} from '@components/Auth';
import { BackBox } from '@components/common';
import SubmitBtn from '@components/common/button/SubmitBtn';
import { CheckboxIcon } from '@components/common/icons/Icons';
import { setItem } from '@utils/localStorageFun';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const onSignupSubmit: SubmitHandler<SignupFormValue> = async (data) => {
    const { email, password } = data;

    try {
      const res = await postSignup({
        email,
        password,
      });
      if (res.status === 200) {
        setItem('accessToken', res.data.data.tokenInfo.accessToken);
        navigate('/signup/success');
      }
    } catch (err) {
      console.error('회원가입 요청 중 에러 발생', err);
    }
  };

  return (
    <div className="flex h-[95vh] flex-col">
      <BackBox
        backHandler={() => {
          navigate('/login');
        }}
      />
      <AuthTitle
        title={
          <>
            위플플 이용을 위해 <br /> 회원가입을 해주세요
          </>
        }
      />
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
          <input
            type="checkbox"
            id="termsAgreement"
            className="hidden"
            {...register('checkbox', { required: true })}
          />
          <label
            htmlFor="termsAgreement"
            className="mb-2 flex items-start gap-2.5">
            <div className="checked:text-main2">
              <CheckboxIcon fill={watch('checkbox') ? '#29DDF6' : '#D7D7D7'} />
            </div>
            <p className="body6 leading-5 text-gray4">
              <a href="/" className="underline underline-offset-2">
                위플랜플랜스 이용약관
              </a>
              ,{' '}
              <a href="/" className="underline underline-offset-2">
                개인정보 수집 및 이용
              </a>
              ,{' '}
              <a href="/" className="underline underline-offset-2">
                개인정보 제공 내용
              </a>
              을 확인 하였으며,{' '}
              <strong className="font-semibold">동의합니다.</strong>
            </p>
          </label>
          <SubmitBtn isActive={isValid}>완료</SubmitBtn>
        </div>
      </form>
    </div>
  );
};

export default Signup;
