import type { EditPassword } from '@/@types/auth.types';
import { putMemberPassword } from '@api/member';
import {
  AuthCurrentPwInputBox,
  AuthPwCheckInputBox,
  AuthPwInputBox,
} from '@components/Auth';
import SubmitBtn from '@components/common/button/SubmitBtn';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const EditPwForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    resetField,
    setError,
    formState: { errors, isValid },
  } = useForm<EditPassword>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const navigate = useNavigate();

  const onEditPwSubmit: SubmitHandler<EditPassword> = async (data) => {
    const { currentPw, password } = data;

    try {
      const res = await putMemberPassword({
        password: currentPw,
        newPassword: password,
      });
      if (res.status === 200) {
        alert('비밀번호가 변경되었습니다.');
        navigate('/mypage/info');
      }
    } catch (err) {
      console.error('비밀번호 수정 요청 중 에러 발생', err);
      if (err instanceof AxiosError) {
        if (err.response?.data.status === 404) {
          resetField('currentPw');
          setError('currentPw', { message: '비밀번호가 올바르지 않습니다.' });
        }
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onEditPwSubmit)}
      className="mt-14 flex h-[80vh] flex-col justify-between">
      <div>
        <AuthCurrentPwInputBox
          register={register}
          inputValue={watch('currentPw')}
          resetField={resetField}
          errors={errors}
          setError={setError}
        />
        <AuthPwInputBox
          label="새 비밀번호"
          register={register}
          inputValue={watch('password')}
          resetField={resetField}
          errors={errors}
        />
        <AuthPwCheckInputBox
          register={register}
          getValues={getValues}
          inputValue={watch('passwordCheck')}
          resetField={resetField}
          errors={errors}
        />
      </div>
      <SubmitBtn isActive={isValid}>저장</SubmitBtn>
    </form>
  );
};

export default EditPwForm;
