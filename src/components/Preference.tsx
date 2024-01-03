import { ButtonPrimary } from './common/button/Button';

const sections = [
  {
    title: '계획성',
    options: [
      { text: '철저하게', active: true },
      { text: '여유롭게', active: false },
    ],
  },
  {
    title: '활동성',
    options: [
      { text: '아침형', active: true },
      { text: '저녁형', active: false },
    ],
  },
  {
    title: '숙소',
    options: [
      { text: '분위기', active: true },
      { text: '가격', active: false },
    ],
  },
  {
    title: '음식',
    options: [
      { text: '노포 맛집', active: true },
      { text: '인테리어', active: false },
    ],
  },
  {
    title: '관광지',
    options: [
      { text: '액티비티', active: true },
      { text: '휴양', active: false },
    ],
  },
];

const Option: React.FC<{ text: string; active: boolean }> = ({
  text,
  active,
}) => (
  <div
    className={` relative flex h-10 flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded-[168px] border border-solid ${
      active ? 'border-[#29ddf6]' : 'border-[#d7d7d7]'
    } px-7 py-2`}>
    <p
      className={`flex-shrink-0 flex-grow-0 text-left text-sm font-semibold ${
        active ? 'text-[#29ddf6]' : 'text-[#888]'
      }`}>
      {text}
    </p>
  </div>
);

const Preference = () => {
  return (
    <div className="flex h-[95vh] flex-col">
      <div className="relative flex flex-col items-start justify-start gap-3 p-4">
        <p className="text-center text-2xl font-bold text-black">
          어떤 여행을 좋아하세요?
        </p>
        <p className="text-left text-sm text-[#888]">여행 취향을 골라주세요.</p>
      </div>

      <div className="flex-grow overflow-auto">
        {sections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col items-start justify-start gap-4 px-4">
            <div className="relative flex h-6 w-[335px] items-center justify-start gap-2 py-2">
              <p className="text-left text-base font-bold text-black">
                {section.title}
              </p>
            </div>
            <div className="flex items-start justify-between gap-2">
              {section.options.map((option) => (
                <Option
                  key={option.text}
                  text={option.text}
                  active={option.active}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <ButtonPrimary onClick={() => {}}>완료</ButtonPrimary>
    </div>
  );
};

export default Preference;
