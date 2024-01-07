import { CloseIcon } from '@components/common/icons/Icons';
import { UseFormRegisterReturn, UseFormResetField } from 'react-hook-form';

interface Props {
  label: string;
  id: 'email' | 'password' | 'passwordCheck';
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  register: UseFormRegisterReturn;
  blurHandler?: VoidFunction;
  inputValue: string;
  resetField: UseFormResetField<any>; // TODO 서지수 | any 나중에 제거
  marginB?: string;
  // validifyCheckList?: string[];
  // onInputBlur: VoidFunction;
  // children: React.ReactNode;
}

// TODO 서지수 | 에러 발생 시 빨간 밑줄

const AuthInput = ({
  label,
  id,
  type = 'text',
  placeholder,
  register,
  blurHandler,
  inputValue,
  resetField,
  marginB = 'mb-6',
}: Props) => {
  return (
    <div className={`${marginB} flex flex-col gap-2`}>
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="body3 text-main2">
          {label}
        </label>
        <div className="flex h-10 items-center border-b-[1.25px] border-solid border-gray3 focus-within:border-main1">
          <input
            id={id}
            className="w-full text-sm font-normal outline-none placeholder:text-gray3"
            type={type}
            placeholder={placeholder}
            {...register}
            onBlur={blurHandler}
          />
          {inputValue && (
            <div
              onClick={() => {
                resetField(id);
              }}>
              <CloseIcon size={20} fill="#D7D7D7" />
            </div>
          )}
        </div>
      </div>

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

export default AuthInput;
