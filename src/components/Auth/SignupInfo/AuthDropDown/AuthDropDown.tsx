import { useState } from 'react';
import AuthDropDownOption from './AuthDropDownOption';
import * as Select from '@radix-ui/react-select';
import { DownIcon } from '@components/common/icons/Icons';
import {
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form';

interface Props {
  label: string;
  text: string;
  options: SelectOption[];
  name: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;

  // initialState: string | null;
  // setState: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthDropDown = ({
  label,
  text,
  options,
  name,
  register,
  setValue,
}: Props) => {
  const onSelectClick = (e: any) => {
    setValue(name, e);
  };

  return (
    // <div className="z-10 flex flex-col">
    //   <h2 className="body2 mb-2 text-main1">{label}</h2>
    //   <div
    //     onClick={() => setIsShow(!isShow)}
    //     className={`${
    //       isShow ? 'h-48' : 'h-12'
    //     } relative w-full overflow-hidden rounded-lg border border-solid border-gray3`}>
    //     <AuthDropDownOption
    //       clickHandler={() => {
    //         setIsShow(!isShow);
    //       }}
    //       showDownIcon>
    //       {isSelected}
    //     </AuthDropDownOption>
    //     {isShow && (
    //       <ul className="absolute top-12 z-20 h-36 w-full overflow-auto rounded-b-lg bg-white">
    //         {options.map((option) => (
    //           <li className="h-12 ">
    //             <AuthDropDownOption
    //               clickHandler={() => {
    //                 setIsSelected(option.value);
    //                 setIsShow(!isShow);
    //               }}>
    //               {option.value}
    //             </AuthDropDownOption>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // </div>
    <div className="w-full">
      <Select.Root onValueChange={onSelectClick} {...register(name)}>
        <h2 className="body2 mb-2 text-main1">{label}</h2>
        <Select.Trigger className="data-[placeholder]:body5 relative flex h-12 w-full items-center justify-center rounded-lg border border-solid border-gray3 bg-white hover:bg-gray1 data-[state=open]:rounded-b-none data-[placeholder]:text-gray4">
          <Select.Value className="body5 text-gray6" placeholder={text} />
          <Select.Icon className="absolute right-[10px] top-4">
            <DownIcon size={20} color="#888888" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position={'popper'}
            collisionPadding={0}
            className="h-36 overflow-hidden rounded-b-lg border-x border-b border-solid border-gray3 bg-white">
            <Select.Viewport>
              {options.map((option) => (
                <AuthDropDownOption key={option.id} value={option.id}>
                  {option.value}
                </AuthDropDownOption>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default AuthDropDown;
