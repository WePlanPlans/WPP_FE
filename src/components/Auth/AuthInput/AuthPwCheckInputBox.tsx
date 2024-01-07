import AuthInputWrapper from './AuthInputWrapper';
import AuthInput from './AuthInput';
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
} from 'react-hook-form';

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
  return (
    <AuthInputWrapper>
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
        inputValue={inputValue}
        resetField={resetField}
      />
    </AuthInputWrapper>
  );
};

export default AuthPwCheckInputBox;
