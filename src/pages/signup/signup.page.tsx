import { getCheckEmail } from '@api/auth';
import { AuthEmailInputBox, AuthInput, ErrorMessage } from '@components/Auth';
import SubmitBtn from '@components/common/button/SubmitBtn';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const [isActive] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    resetField,
    formState: { errors },
  } = useForm<SignupFormValue>({
    reValidateMode: 'onSubmit',
  });

  const onSignupSubmit = () => {
    console.log('회원가입 버튼 클릭');
  };

  console.log(errors);
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
        />

        <AuthInput
          label={'비밀번호'}
          id="password"
          type="password"
          placeholder={'비밀번호를 입력해주세요'}
          register={register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: 8,
            maxLength: 20,
            validate: {
              checkEng: (value) => {
                return /[a-zA-Z]/.test(value);
              },
              checkNum: (value) => {
                return /[0-9]/.test(value);
              },
            },
          })}
          inputValue={watch('password')}
          resetField={resetField}
        />
        <AuthInput
          label={'비밀번호 확인'}
          id="passwordCheck"
          type="password"
          placeholder={'비밀번호를 재입력해주세요'}
          register={register('passwordCheck', {
            required: '비밀번호를 재입력해주세요.',
            validate: {
              matchPassword: (value) => {
                const { password } = getValues();
                return password === value;
              },
            },
          })}
          inputValue={watch('passwordCheck')}
          resetField={resetField}
        />
        {/* <AuthEmailInputBox />
        <AuthPwInputBox /> */}

        {/* TODO 서지수 | 모든 조건이 만족되어야지만 활성화되도록 수정 */}
        <div className="mt-auto">
          <SubmitBtn isActive={false}>완료</SubmitBtn>
        </div>
      </form>
    </div>
  );
};

export default Signup;
