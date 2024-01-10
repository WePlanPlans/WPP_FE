import SubmitBtn from '@components/common/button/SubmitBtn';
import AuthSurveyOption from './AuthSurveyOption';
import { SubmitHandler, useForm } from 'react-hook-form';
import { putMemberSurvey } from '@api/member';
import { useNavigate } from 'react-router-dom';
import { surveyArr } from '@utils/survey.constants';
import { useEffect } from 'react';
import { UserInfoState } from '@recoil/Auth.atom';
import { useRecoilState } from 'recoil';

interface Props {
  path: string;
}

const AuthSurvey = ({ path }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isDirty },
  } = useForm<Survey>();
  const navigate = useNavigate();
  const [userInfo, _] = useRecoilState(UserInfoState);
  useEffect(() => {
    if (userInfo?.survey) {
      const { accommodation, activeHours, food, planning, tripStyle } =
        userInfo.survey;
      setValue('accommodation', accommodation);
      setValue('activeHours', activeHours);
      setValue('food', food);
      setValue('planning', planning);
      setValue('tripStyle', tripStyle);
    }
  }, [userInfo]);

  const onSaveSubmit: SubmitHandler<Survey> = async (data) => {
    try {
      const res = await putMemberSurvey({ survey: data });
      if (res.data.status === 200) {
        // setUserInfo((prevUserInfo) => {
        //   const newPrevUserInfo = prevUserInfo!;
        //   newPrevUserInfo.survey = data;
        //   return newPrevUserInfo;
        // });
        alert('변경되었습니다.');
        navigate(path);
      }
    } catch (err) {
      console.error(err);
      alert('오류가 발생했습니다. 다시 시도해주세요');
    }
  };
  console.log(isDirty);

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
      <SubmitBtn isActive={isDirty && Object.keys(watch()).length !== 0}>
        완료
      </SubmitBtn>
    </form>
  );
};

export default AuthSurvey;
