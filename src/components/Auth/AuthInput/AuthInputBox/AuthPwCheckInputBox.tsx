import {
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
} from 'react-hook-form';
import { AuthInput, AuthInputWrapper } from './AuthInputItem';

interface Props {
  register: UseFormRegister<SignupFormValue>;
  getValues: UseFormGetValues<SignupFormValue>;
  inputValue: string;
  resetField: UseFormResetField<any>; // TODO 서지수 | any 나중에 제거
  // marginB?: string;
}

const AuthPwCheckInputBox = ({
  register,
  getValues,
  inputValue,
  resetField,
}: Props) => {
  const matchPassword = (value: string) => {
    const { password } = getValues();
    return password === value;
  };

  return (
    <AuthInputWrapper>
      <AuthInput
        label={'비밀번호 확인'}
        id="passwordCheck"
        type="password"
        placeholder={'비밀번호를 재입력해주세요'}
        register={register('passwordCheck', {
          required: '비밀번호를 재입력해주세요.',
          validate: matchPassword,
        })}
        inputValue={inputValue}
        resetField={resetField}
      />
    </AuthInputWrapper>
  );
};

export default AuthPwCheckInputBox;
