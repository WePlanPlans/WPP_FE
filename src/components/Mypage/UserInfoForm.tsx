import { SubmitHandler, useForm } from 'react-hook-form';
import { putMember } from '@api/member';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserInfoState } from '@recoil/Auth.atom';
import { useEffect } from 'react';
import UserInfoImg from '@components/Auth/SignupInfo/UserInfoImg';
import AuthNicknameInputBox from '@components/Auth/AuthInput/AuthInputBox/AuthNicknameInputBox';
import AuthDropDown from '@components/Auth/SignupInfo/AuthDropDown/AuthDropDown';
import { ageArr, genderArr } from '@utils/authSelectOptions';
import { BackBox } from '@components/common';
import DeleteMemberButton from './DeleteMemberButton';

const UserInfoForm = () => {
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
        navigate('/mypage');
      }
    } catch (err) {
      console.error('회원정보 수정 요청 중 에러 발생', err);
    }
  };

  return (
    <>
      <BackBox
        showBack
        backHandler={() => {
          navigate('/mypage');
        }}
        showSave
        isSaveValid={isValid}
        saveHandler={handleSubmit(onInfoSubmit)}>
        회원정보 수정
      </BackBox>
      <div className="flex flex-col items-center">
        <form
          // onSubmit={handleSubmit(onInfoSubmit)}
          className="flex h-[85vh] w-full flex-col justify-between">
          <div>
            <div className="mb-4 mt-6">
              <UserInfoImg
                register={register}
                setValue={setValue}
                inputValue={watch('profileImageUrl')}
              />
            </div>
            <div className="mb-12 flex flex-col items-center">
              <div className="body5 mb-2 h-8 rounded-full border border-solid border-gray2 px-3 py-2 text-gray5">
                {userInfo?.email}
              </div>
              <Link to="password" className="body4 text-gray4">
                비밀번호 변경
              </Link>
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
          <DeleteMemberButton />
        </form>
      </div>
    </>
  );
};

export default UserInfoForm;
