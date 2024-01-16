import { getCheckNickname } from '@api/auth';
import { AuthInputWrapper, AuthInput, ErrorMessage } from './AuthInputItem';
import type { AuthNicknameInputBoxProps } from '@/@types/auth.types';
import { useRecoilValue } from 'recoil';
import { UserInfoState } from '@recoil/Auth.atom';

const AuthNicknameInputBox = ({
  register,
  inputValue,
  resetField,
  errors,
  setError,
  getValues,
}: AuthNicknameInputBoxProps) => {
  const nicknamePatternValue = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,12}$/;

  const nicknameError = errors.nickname;
  const nicknameErrorMessage = nicknameError?.message;

  const userInfo = useRecoilValue(UserInfoState);

  const onNicknameBlur = async () => {
    if (
      nicknamePatternValue.test(getValues('nickname')) &&
      userInfo?.nickname !== inputValue
    ) {
      try {
        const res = await getCheckNickname(getValues('nickname'));
        if (res.status === 200) {
          const isExist = res.data.data.exists;
          if (isExist) {
            setError('nickname', { message: '이미 사용 중인 닉네임입니다.' });
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
        label="닉네임"
        subLabel="(2~12자리 한글 및 영문, 숫자)"
        required
        id="nickname"
        isAutoFocus
        placeholder={'닉네임을 입력해주세요'}
        register={register('nickname', {
          required: '닉네임을 입력해주세요.',
          pattern: {
            value: nicknamePatternValue,
            message: '2~12자리 한글 및 영문, 숫자',
          },
        })}
        blurHandler={onNicknameBlur}
        inputValue={inputValue}
        resetField={resetField}
        isInvalid={!!errors.nickname}
      />
      {nicknameErrorMessage && (
        <ErrorMessage>{`${nicknameErrorMessage}`}</ErrorMessage>
      )}
    </AuthInputWrapper>
  );
};

export default AuthNicknameInputBox;
