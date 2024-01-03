import { useState } from 'react';
import ValidifyCheck from './ValidifyCheck';
import { CloseIcon } from '@components/common/icons/Icons';
import EmailValidifyCheck from './EmailValidifyCheck';

interface Props {
  label: string;
  type?: string;
  placeholder: string;
  children: React.ReactNode;
  validifyCheckList?: string[];
  onInputBlur: VoidFunction;
  marginB?: string;
}

const UserInputBox = ({
  label,
  type = 'password',
  placeholder,
  children,
  validifyCheckList,
  onInputBlur,
  marginB = 'mb-6',
}: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${marginB} flex flex-col gap-2`}>
      <div className="flex flex-col gap-[0.4375rem]">
        <label htmlFor={label} className="body3 text-main2">
          {label}
        </label>
        <div className="focus-within:border-main1 flex h-10 items-center border-b-[1.25px] border-solid border-gray3">
          <input
            id={label}
            className="w-full text-sm font-normal outline-none placeholder:text-gray3"
            type={type}
            placeholder={placeholder}
            required
            value={inputValue}
            onChange={onInputChange}
            onBlur={onInputBlur}
          />
          {inputValue && (
            <button
              type="button"
              onClick={() => {
                setInputValue('');
              }}>
              <CloseIcon size={20} color="white" fill="#888888" />
            </button>
          )}
        </div>
      </div>
      {children}

      {/* {type === 'email' && <EmailValidifyCheck inputValue={inputValue} />}

      {validifyCheckList && (
        <div className="flex h-6 items-center gap-2">
          {validifyCheckList.map((validifyCheckItem) => (
            <ValidifyCheck
              key={validifyCheckItem}
              checkId={validifyCheckItem}
              inputValue={inputValue}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default UserInputBox;
