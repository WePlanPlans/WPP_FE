import { FC, ReactNode } from 'react';

interface InputFieldProps {
  icon: FC;
  onClick?: () => void;
  isClickable?: boolean;
  children: ReactNode;
}

export const InputField: FC<InputFieldProps> = ({
  icon: Icon,
  onClick,
  isClickable,
  children,
}) => {
  return (
    <div
      className={`mb-3 flex h-[54px] w-full items-center rounded-lg border border-solid border-zinc-300 px-[14px] py-3 
                 ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={onClick}>
      <div className="mr-2 flex size-[24px] content-center justify-center">
        <Icon />
      </div>
      {children}
    </div>
  );
};
