import { useState, ReactNode } from 'react';
import { CheckIcon } from '../icons/Icons';

interface ListSelectBtnProps {
  children: ReactNode;
  onClick?: () => void;
}

export const ListSelectBtn = ({ children, onClick }: ListSelectBtnProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`focus:shadow-outline-blue body3 shrink-0 rounded-[32px] px-[14px] py-[7px] text-center leading-normal transition-colors duration-100 focus:outline-none ${
        isActive
          ? 'border border-solid border-main2 bg-white text-main2'
          : 'border border-solid border-gray1 bg-gray1 text-gray4'
      }`}>
      {children}
    </button>
  );
};

interface ListCheckBtnProps {
  onClick?: () => void;
}

export const ListCheckBtn = ({ onClick }: ListCheckBtnProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        className={`focus:shadow-outline-blue body3 flex size-[20px] shrink-0 items-center justify-center rounded-[32px] text-white transition-colors duration-100 focus:outline-none ${
          isActive ? ' bg-black ' : 'bg-gray3 '
        }`}>
        <CheckIcon color="white" />
      </button>
    </div>
  );
};
