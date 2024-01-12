import React from 'react';
import { CloseIcon } from '@components/common/icons/Icons';

interface InputFieldProps {
  icon: React.ElementType;
  placeholder: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | number) => void;
  onClear?: () => void;
  type?: string;
  onClick?: () => void;
  minValue?: number;
  maxValue?: number;
}

export const InputField: React.FC<InputFieldProps> = ({
  icon: IconComponent,
  placeholder,
  value,
  onChange,
  onClear,
  type = 'text',
  onClick,
  minValue = -Infinity,
  maxValue = Infinity,
  ...props
}) => {
  const handleDecrease = () => {
    if (typeof value === 'number' && onChange) {
      onChange(Math.max(value - 1, minValue));
    }
  };

  const handleIncrease = () => {
    if (typeof value === 'number' && onChange) {
      onChange(Math.min(value + 1, maxValue));
    }
  };

  return (
    <div
      className={`mb-3 flex h-[54px] w-full items-center rounded-lg border border-solid border-zinc-300 px-[14px] py-3 ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}>
      <div className="mr-2 flex size-[24px] content-center justify-center">
        <IconComponent />
      </div>
      {onClick ? (
        <div className="flex-1 rounded-lg p-2 focus:outline-none">
          {placeholder}
        </div>
      ) : (
        <input
          type={type}
          className="flex-1 rounded-lg p-2 focus:outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          {...props}
        />
      )}
      {!onClick && type === 'number' && (
        <div className="ml-auto flex">
          <button
            onClick={handleDecrease}
            className="flex size-[24px] items-center justify-center rounded-full bg-gray3 text-white">
            -
          </button>
          <button
            onClick={handleIncrease}
            className="ml-2 flex size-[24px] items-center justify-center rounded-full bg-gray3 text-white">
            +
          </button>
        </div>
      )}
      {!onClick && type !== 'number' && value && (
        <div className="cursor-pointer rounded-full bg-gray3" onClick={onClear}>
          <CloseIcon />
        </div>
      )}
    </div>
  );
};
