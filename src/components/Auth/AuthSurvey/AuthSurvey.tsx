import AuthSurveyOption from './AuthSurveyOption';
import { surveyArr } from '@utils/survey.constants';
import { useEffect } from 'react';
import { UserInfoState } from '@recoil/Auth.atom';
import { useRecoilState } from 'recoil';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface Props {
  register: UseFormRegister<Survey>;
  setValue: UseFormSetValue<Survey>;
}

const AuthSurvey = ({ register, setValue }: Props) => {
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

  return (
    <form className="mb-8">
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
    </form>
  );
};

export default AuthSurvey;
