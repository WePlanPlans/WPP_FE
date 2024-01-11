import React from 'react';

interface NoDataMessageProps {
  message1: string;
  message2: string;
  icon: React.ReactElement;
}

const NoDataMessage: React.FC<NoDataMessageProps> = ({
  message1,
  message2,
  icon,
}) => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
      {icon}
      <div className="mt-[16px] flex flex-col items-center justify-start gap-2">
        <div className="font-['Pretendard'] text-base font-bold  text-gray4">
          {message1}
        </div>
        <div className="inline-flex items-center justify-start gap-2">
          <div className="font-['Pretendard'] text-[13px] font-normal text-gray4">
            {message2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoDataMessage;
