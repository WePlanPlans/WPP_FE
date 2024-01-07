import AuthInputWrapper from '../AuthInputWrapper';
import AuthInput from '../AuthInput';
import { getCheckEmail } from '@api/auth';
import {
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
  UseFormSetError,
} from 'react-hook-form';
import { ErrorMessage } from '@components/Auth';

interface Props {
  register: UseFormRegister<SignupFormValue>;
  inputValue: string;
  resetField: UseFormResetField<any>; // TODO 서지수 | any 나중에 제거
  errors: FieldErrors<SignupFormValue>;
  setError: UseFormSetError<SignupFormValue>;
  // marginB?: string;
}

const AuthEmailInputBox = ({
  register,
  inputValue,
  resetField,
  errors,
  setError,
}: Props) => {
  const patternValue = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/;

  const onEmailBlur = async () => {
    if (patternValue.test(inputValue)) {
      try {
        const res = await getCheckEmail(inputValue);
        if (res.status === 200) {
          const isExist = res.data.data.exists;
          if (!isExist) {
            setError(
              'email',
              { message: '이미 사용 중인 이메일입니다.' },
              { shouldFocus: true },
            );
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <AuthInputWrapper>
      <AuthInput
        label={'이메일'}
        id="email"
        type="email"
        isAutoFocus={true}
        placeholder={'이메일을 입력하세요'}
        register={register('email', {
          required: '아이디를 입력해주세요.',
          pattern: {
            value: patternValue,
            message: '이메일 형식이 올바르지 않습니다.',
          },
        })}
        blurHandler={onEmailBlur}
        inputValue={inputValue}
        resetField={resetField}
      />

      {errors.email && <ErrorMessage>{`${errors.email.message}`}</ErrorMessage>}
    </AuthInputWrapper>
  );
};

export default AuthEmailInputBox;
