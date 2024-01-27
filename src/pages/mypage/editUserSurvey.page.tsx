import { putMemberSurvey } from '@api/member';
import AuthSurvey from '@components/Auth/AuthSurvey/AuthSurvey';
import { BackBox } from '@components/common';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const EditUserSurvey = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<Survey>();

  const onSaveSubmit: SubmitHandler<Survey> = async (data) => {
    try {
      const res = await putMemberSurvey({ survey: data });
      if (res.data.status === 200) {
        navigate(-1);
      }
    } catch (err) {
      console.error(err);
      alert('오류가 발생했습니다. 다시 시도해주세요');
    }
  };

  console.log(isValid);

  return (
    <>
      <BackBox
        showBack
        backHandler={() => {
          navigate(-1);
        }}
        showSave
        isSaveValid={isValid}
        saveHandler={handleSubmit(onSaveSubmit)}>
        나의 여행 취향 설정
      </BackBox>
      <div className="mt-8">
        <AuthSurvey register={register} setValue={setValue} />
      </div>
    </>
  );
};

export default EditUserSurvey;
