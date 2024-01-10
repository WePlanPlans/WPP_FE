import SubmitBtn from '@components/common/button/SubmitBtn';
import AuthSurveyOption from './AuthSurveyOption';
import { SubmitHandler, useForm } from 'react-hook-form';
import { putMemberSurvey } from '@api/member';
import { useNavigate } from 'react-router-dom';
import { surveyArr } from '@utils/survey.constants';

const AuthSurvey = () => {
  const { register, handleSubmit, watch } = useForm<Survey>();
  const navigate = useNavigate();

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
    <form className="mb-8" onSubmit={handleSubmit(onSaveSubmit)}>
      <div className="overflow-auto">
        {surveyArr.map((section) => (
          <fieldset key={section.id} className="mb-8 flex flex-col gap-4">
            <legend className="headline1 mb-2 text-gray7">
              {section.title}
            </legend>
            <div className="flex gap-2">
              {section.options.map((option) => (
                <AuthSurveyOption
                  key={option}
                  name={section.id}
                  content={option}
                  register={register}
                />
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <SubmitBtn isActive={Object.keys(watch()).length !== 0}>완료</SubmitBtn>
    </form>
  );
};

export default AuthSurvey;
