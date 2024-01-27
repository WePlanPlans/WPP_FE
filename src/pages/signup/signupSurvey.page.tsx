import { AuthTitle } from '@components/Auth';
import { BackBox } from '@components/common';
import AuthSurvey from '@components/Auth/AuthSurvey/AuthSurvey';
import { useNavigate } from 'react-router-dom';
import { ProgressBarIcon } from '@components/common/icons/Icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitBtn from '@components/common/button/SubmitBtn';
import { putMemberSurvey } from '@api/member';

const SignupSurvey = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid },
  } = useForm<Survey>();

  const onSaveSubmit: SubmitHandler<Survey> = async (data) => {
    try {
      const res = await putMemberSurvey({ survey: data });
      if (res.data.status === 200) {
        navigate('/signup/info');
      }
    } catch (err) {
      console.error(err);
      alert('오류가 발생했습니다. 다시 시도해주세요');
    }
  };

  return (
    <div className="relative flex h-full flex-col">
      <BackBox
        showSkip
        skipHandler={() => {
          navigate('/signup/info');
        }}
      />
      <div className="absolute right-0 top-12">
        <ProgressBarIcon />
      </div>
      <AuthTitle
        title={'어떤 여행을 좋아하세요?'}
        subTitle="여행 취향을 골라주세요."
      />
      <AuthSurvey register={register} setValue={setValue} />
      <SubmitBtn
        isActive={isDirty && isValid}
        onClick={handleSubmit(onSaveSubmit)}>
        완료
      </SubmitBtn>
    </div>
  );
};

export default SignupSurvey;
