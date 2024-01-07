import AuthInputWrapper from './AuthInputWrapper';
import AuthInput from './AuthInput';
import { getCheckEmail } from '@api/auth';
import { UseFormRegister, UseFormResetField } from 'react-hook-form';
import { useState } from 'react';
import { ErrorMessage } from '..';

interface Props {
  register: UseFormRegister<SignupFormValue>;
  inputValue: string;
  resetField: UseFormResetField<any>; // TODO 서지수 | any 나중에 제거
  // marginB?: string;
}

const AuthEmailInputBox = ({ register, inputValue, resetField }: Props) => {
  const [isEmailExist, setIsEmailExist] = useState<boolean>(false);

  const onEmailBlur = async () => {
    console.log('이메일 focus 해제');

    try {
      const res = await getCheckEmail(inputValue);
      if (res.status === 200) {
        const isExist = res.data.data.exists;
        setIsEmailExist(isExist);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthInputWrapper>
      <AuthInput
        label={'이메일'}
        id="email"
        type="email"
        placeholder={'이메일을 입력하세요'}
        register={register('email', {
          required: '아이디를 입력해주세요.',
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: '이메일 형식이 올바르지 않습니다.',
          },
        })}
        blurHandler={onEmailBlur}
        inputValue={inputValue}
        resetField={resetField}
      />
      {/* <span className="body6 text-red">
        {!isEmailValidated
          ? '이메일 형식이 올바르지 않습니다.'
          : isEmailDuplicate && '사용 중인 이메일입니다.'}
      </span> */}
      {/* TODO 서지수 | 변경되면 코드 수정 */}
      {!isEmailExist && <ErrorMessage>사용 중인 이메일입니다.</ErrorMessage>}
    </AuthInputWrapper>
  );
};

export default AuthEmailInputBox;
