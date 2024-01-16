import type {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form';

export interface AuthRequest {
  email: string;
  password: string;
}

export interface SignupFormValue extends AuthRequest {
  passwordCheck: string;
  checkbox: boolean;
}

export interface EditPassword {
  currentPw: string;
  password: string;
  passwordCheck: string;
}

export interface EditPasswordProps {
  password: string;
  newPassword: string;
}

export interface AuthInputBoxProps {
  register: UseFormRegister<any>;
  inputValue: string;
  resetField: UseFormResetField<any>;
  errors: FieldErrors<any>;
}

export interface AuthEmailInputBoxProps extends AuthInputBoxProps {
  setError: UseFormSetError<any>;
}

export interface AuthPwInputBoxProps extends AuthInputBoxProps {
  label?: string;
}

export interface AuthPwCheckInputBoxProps extends AuthInputBoxProps {
  getValues: UseFormGetValues<any>;
}

export interface AuthNicknameInputBoxProps extends AuthInputBoxProps {
  getValues: UseFormGetValues<any>;
  setError: UseFormSetError<any>;
}

export interface AuthImgProps {
  register: UseFormRegister<any>;
  inputValue: string;
  setValue: UseFormSetValue<any>;
}
