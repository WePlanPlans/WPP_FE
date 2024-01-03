import { ReactNode } from 'react';

interface ButtonProps {
  isActive?: boolean;
  type?: 'submit' | 'button' | 'reset' | undefined;
  onClick?: VoidFunction;
  children: ReactNode;
  outline?: boolean;
}

const Button = ({
  isActive = true,
  type = 'submit',
  onClick,
  children,
  outline = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!isActive}
      className={`btn-base headline1 ${
        outline
          ? 'text-main1 border-main1 border-[1.5px] border-solid bg-white'
          : 'bg-main1  text-white'
      } h-14 p-2 disabled:cursor-not-allowed disabled:bg-gray3`}>
      {children}
    </button>
  );
};

export default Button;
