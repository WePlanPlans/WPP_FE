import { SubmitHandler, useForm } from 'react-hook-form';
import UserInfoImg from './UserInfoImg';
import { putMember } from '@api/member';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserInfoState } from '@recoil/Auth.atom';
import { useEffect } from 'react';
import SubmitBtn from '@components/common/button/SubmitBtn';
import AuthDropDown from './AuthDropDown/AuthDropDown';
import AuthNicknameInputBox from '../AuthInput/AuthInputBox/AuthNicknameInputBox';
import { ageArr, genderArr } from '@utils/authSelectOptions';

const SignupInfoForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    resetField,
    setError,
    setValue,
    formState: { errors, isValid },
  } = useForm<any>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const navigate = useNavigate();

  const userInfo = useRecoilValue(UserInfoState);
  useEffect(() => {
    setValue('nickname', userInfo?.nickname);
    setValue('profileImageUrl', userInfo?.profileImageUrl);
    setValue('genderType', userInfo?.genderType);
    setValue('ageType', userInfo?.ageType);
  }, [userInfo]);

  const onInfoSubmit: SubmitHandler<any> = async (data) => {
    const { nickname, profileImageUrl, genderType, ageType } = data;

    try {
      const res = await putMember({
        nickname: nickname,
        profileImageUrl: profileImageUrl,
        ageType: ageType === '' ? null : ageType,
        genderType: genderType === '' ? null : genderType,
      });
      if (res.status === 200) {
        navigate('/');
      }
    } catch (err) {
      console.error('회원정보 수정 요청 중 에러 발생', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onInfoSubmit)}
      className="flex h-[100vh] w-full flex-col justify-between">
      <div>
        <div className="mb-10">
          <UserInfoImg
            register={register}
            setValue={setValue}
            inputValue={watch('profileImageUrl')}
          />
        </div>
        <AuthNicknameInputBox
          register={register}
          inputValue={watch('nickname')}
          resetField={resetField}
          errors={errors}
          setError={setError}
          getValues={getValues}
        />
        <div className="flex flex-col gap-6">
          <AuthDropDown
            label="성별"
            options={genderArr}
            name={'genderType'}
            setValue={setValue}
            value={watch('genderType')}
          />
          <AuthDropDown
            label="연령대"
            options={ageArr}
            name={'ageType'}
            setValue={setValue}
            value={watch('ageType')}
          />
        </div>
      </div>
      <div className="mt-auto">
        <SubmitBtn isActive={isValid}>완료</SubmitBtn>
      </div>
    </form>
  );
};

export default SignupInfoForm;
