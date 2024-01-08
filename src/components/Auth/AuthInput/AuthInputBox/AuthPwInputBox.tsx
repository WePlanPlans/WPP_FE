import {
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
} from 'react-hook-form';
import { AuthInput, AuthInputWrapper, ValidifyCheck } from './AuthInputItem';

interface Props {
  register: UseFormRegister<SignupFormValue>;
  inputValue: string;
  resetField: UseFormResetField<any>; // TODO 서지수 | any 나중에 제거
  errors: FieldErrors<SignupFormValue>;
}

const AuthPwInputBox = ({
  register,
  inputValue,
  resetField,
  errors,
}: Props) => {
  const errorTypes = errors.password?.types;

  const checkEng = (value: string) => {
    return /[a-zA-Z]/.test(value);
  };
  const checkNum = (value: string) => {
    return /[0-9]/.test(value);
  };

  return (
    <AuthInputWrapper>
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
            checkEng: checkEng,
            checkNum: checkNum,
          },
        })}
        inputValue={inputValue}
        resetField={resetField}
      />

      <div className="flex h-6 items-center gap-2">
        <ValidifyCheck
          isValidated={
            !!inputValue && !(errorTypes && 'checkEng' in errorTypes)
          }>
          영문포함
        </ValidifyCheck>
        <ValidifyCheck
          isValidated={
            !!inputValue && !(errorTypes && 'checkNum' in errorTypes)
          }>
          숫자포함
        </ValidifyCheck>
        <ValidifyCheck
          isValidated={
            !!inputValue &&
            !(
              (errorTypes && 'minLength' in errorTypes) ||
              (errorTypes && 'maxLength' in errorTypes)
            )
          }>
          8~20자 이내
        </ValidifyCheck>
      </div>
    </AuthInputWrapper>
  );
};

export default AuthPwInputBox;
