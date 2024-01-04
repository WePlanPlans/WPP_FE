import { useState } from 'react';
import { Button } from '../../components/common';
import { SignupSurveyList } from './SignupSurveyList';
import { SignupSurveyOption } from './SignupSurveyOption';

const SignupSurvey = () => {
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>(
    SignupSurveyList.map(() => null),
  );

  const handleOptionClick = (sectionIndex: number, optionIndex: number) => {
    setSelectedOptions(
      selectedOptions.map((selected, index) => {
        if (index === sectionIndex) {
          return optionIndex;
        }
        return selected;
      }),
    );
  };

  return (
    <div className="flex h-[95vh] flex-col ">
      <div className="relative flex flex-col items-start justify-start gap-3 p-4">
        <p className="flex-shrink-0 flex-grow-0 text-center text-2xl font-bold text-black">
          어떤 여행을 좋아하세요?
        </p>
        <p className="flex-shrink-0 flex-grow-0 text-left text-sm text-[#888]">
          여행 취향을 골라주세요.
        </p>
      </div>
      <div className="scrollbar-hide flex-grow overflow-y-auto">
        {SignupSurveyList.map((section, sectionIndex) => (
          <div
            key={section.title}
            className="mb-[32px] flex flex-col items-start justify-start gap-4 px-4 ">
            <div className="relative flex h-6 w-[335px] items-center justify-start gap-2 py-2 ">
              <p className="text-left text-base font-bold text-black">
                {section.title}
              </p>
            </div>
            <div className="flex items-start justify-between gap-2 ">
              {section.options.map((option, optionIndex) => (
                <button
                  key={option.text}
                  onClick={() => handleOptionClick(sectionIndex, optionIndex)}>
                  <SignupSurveyOption
                    text={option.text}
                    active={selectedOptions[sectionIndex] === optionIndex}
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button onClick={() => {}}>완료</Button>
    </div>
  );
};

export default SignupSurvey;
