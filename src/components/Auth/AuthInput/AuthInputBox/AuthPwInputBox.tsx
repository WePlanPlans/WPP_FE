import AuthInputWrapper from '../AuthInputWrapper';
import AuthInput from '../AuthInput';
import { UseFormRegister, UseFormResetField } from 'react-hook-form';

interface Props {
  register: UseFormRegister<SignupFormValue>;
  inputValue: string;
  resetField: UseFormResetField<any>; // TODO 서지수 | any 나중에 제거
  // marginB?: string;
}

const AuthPwInputBox = ({ register, inputValue, resetField }: Props) => {
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
            checkEng: (value) => {
              return /[a-zA-Z]/.test(value);
            },
            checkNum: (value) => {
              return /[0-9]/.test(value);
            },
          },
        })}
        inputValue={inputValue}
        resetField={resetField}
      />
    </AuthInputWrapper>
  );
};

export default AuthPwInputBox;
