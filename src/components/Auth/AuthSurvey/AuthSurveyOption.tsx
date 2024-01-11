import { UseFormRegister } from 'react-hook-form';

interface Props {
  content: string;
  name: 'planning' | 'activeHours' | 'accommodation' | 'food' | 'tripStyle';
  register: UseFormRegister<Survey>;
}

const AuthSurveyOption = ({ content, name, register }: Props) => {
  let style;
  if (content === '철저하게') {
    style =
      'peer-checked/철저하게:border-main2 peer-checked/철저하게:text-main2';
  } else if (content === '여유롭게') {
    style =
      'peer-checked/여유롭게:border-main2 peer-checked/여유롭게:text-main2';
  } else if (content === '아침형') {
    style = 'peer-checked/아침형:border-main2 peer-checked/아침형:text-main2';
  } else if (content === '저녁형') {
    style = 'peer-checked/저녁형:border-main2 peer-checked/저녁형:text-main2';
  } else if (content === '분위기') {
    style = 'peer-checked/분위기:border-main2 peer-checked/분위기:text-main2';
  } else if (content === '가격') {
    style = 'peer-checked/가격:border-main2 peer-checked/가격:text-main2';
  } else if (content === '노포 맛집') {
    style =
      'peer-checked/노포맛집:border-main2 peer-checked/노포맛집:text-main2';
  } else if (content === '인테리어') {
    style =
      'peer-checked/인테리어:border-main2 peer-checked/인테리어:text-main2';
  } else if (content === '액티비티') {
    style =
      'peer-checked/액티비티:border-main2 peer-checked/액티비티:text-main2';
  } else if (content === '휴양') {
    style = 'peer-checked/휴양:border-main2 peer-checked/휴양:text-main2';
  }
  return (
    <>
      <input
        type="radio"
        id={content}
        className={`hidden peer/${content.replace(' ', '')}`}
        {...register(name)}
        value={content}
      />
      <label
        htmlFor={content}
        className={`${style} body3 flex h-10 items-center justify-center rounded-[168px] border-[1.5px]  border-solid border-gray3 px-7 py-2 text-gray4`}>
        {content}
      </label>
    </>
  );
};

export default AuthSurveyOption;
