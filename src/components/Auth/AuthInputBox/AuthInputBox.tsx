import { CloseIcon } from '@components/common/icons/Icons';
import { UseFormRegisterReturn, UseFormResetField } from 'react-hook-form';

interface Props {
  label: string;
  id: 'email' | 'password';
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  register: UseFormRegisterReturn;
  inputValue: string;
  resetField: UseFormResetField<LoginFormValue | SignupFormValue>;
  marginB?: string;
  // validifyCheckList?: string[];
  // onInputBlur: VoidFunction;
  // children: React.ReactNode;
}

const AuthInputBox = ({
  label,
  id,
  type = 'text',
  placeholder,
  register,
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
          />
          {inputValue && (
            <div
              onClick={() => {
                resetField(id);
              }}>
              <CloseIcon size={20} color="white" fill="#888888" />
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

export default AuthInputBox;
