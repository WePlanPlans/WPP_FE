import { AuthInputWrapper, AuthInput, ErrorMessage } from './AuthInputItem';

const AuthCurrentPwInputBox = ({
  register,
  inputValue,
  resetField,
  errors,
  setError,
}: any) => {
  const currentPwError = errors.currentPw;
  const currentPwErrorMessage = currentPwError?.message;

  const onEmailBlur = async () => {
    // 비밀번호 확인 로직
    // try {
    //   const res = await getCheckPw(inputValue);
    //   if (res.status === 200) {
    //     // 비밀번호가 일치하면 새로운 비밀번호로 수정 API 요청
    //     const isExist = res.data.data.exists;
    //     if (isExist) {
    //       setError('currentPw', { message: '비밀번호가 올바르지 않습니다.' });
    //     }
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <AuthInputWrapper>
      <AuthInput
        label={'현재 비밀번호'}
        id="currentPw"
        type="password"
        isAutoFocus={true}
        placeholder={'현재 비밀번호를 입력해주세요'}
        register={register('currentPw', {
          required: '현재 ',
        })}
        blurHandler={onEmailBlur}
        inputValue={inputValue}
        resetField={resetField}
        isInvalid={!!currentPwError}
      />

      {currentPwErrorMessage && (
        <ErrorMessage>{currentPwErrorMessage}</ErrorMessage>
      )}
    </AuthInputWrapper>
  );
};

export default AuthCurrentPwInputBox;
