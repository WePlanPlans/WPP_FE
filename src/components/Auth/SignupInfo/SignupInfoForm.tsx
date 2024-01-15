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
  // const [genderType, setGenderType] = useState<string | null>(null);
  // const [ageType, setAgeType] = useState<string | null>(null);

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
        genderType: genderType,
        ageType: ageType,
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
            text={'성별을 선택해주세요.'}
            options={genderArr}
            name={'genderType'}
            register={register}
            setValue={setValue}
          />
          <AuthDropDown
            label="연령대"
            text={'연령대를 선택해주세요.'}
            options={ageArr}
            name={'ageType'}
            register={register}
            setValue={setValue}
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

const genderArr: SelectOption[] = [
  { id: 'FEMALE', value: '여' },
  { id: 'MALE', value: '남' },
  { id: 'NON_BINARY', value: '기타' },
];

const ageArr: SelectOption[] = [
  { id: 'TEENAGER', value: '10대' },
  { id: 'TWENTIES', value: '20대' },
  { id: 'THIRTIES', value: '30대' },
  { id: 'FOURTIES', value: '40대' },
  { id: 'ABOVE_FIFTIES', value: '50대 이상' },
];
