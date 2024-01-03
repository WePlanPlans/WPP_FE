import { memo } from 'react';

export const SignupSurveyOption = memo<{ text: string; active: boolean }>(
  ({ text, active }) => (
    <div
      className={`relative flex h-10 items-center justify-center gap-1 rounded-[168px] border-[1.25px] border-solid ${
        active ? 'border-[#29ddf6]' : 'border-[#d7d7d7]'
      } px-7 py-2`}>
      <p
        className={`text-left text-sm font-semibold ${
          active ? 'text-[#29ddf6]' : 'text-[#888]'
        }`}>
        {text}
      </p>
    </div>
  ),
);
