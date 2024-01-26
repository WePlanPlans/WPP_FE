import AuthDropDownOption from './AuthDropDownOption';
import { UseFormSetValue } from 'react-hook-form';
import * as Select from '@radix-ui/react-select';
import { AuthDropDownIcon } from '@components/common/icons/Icons';

interface Props {
  label: string;
  options: SelectOption[];
  name: string;
  setValue: UseFormSetValue<any>;
  value?: string;
}

const AuthDropDown = ({ label, options, name, setValue, value }: Props) => {
  return (
    <div>
      <h2 className="body2 mb-2 text-main1">{label}</h2>
      <Select.Root
        value={value}
        onValueChange={(e) => {
          setValue(name, e);
        }}>
        <Select.Trigger className="data-[placeholder]:body5 relative flex h-12 w-full items-center justify-center rounded-lg border border-solid border-gray3 bg-white hover:bg-gray1 data-[state=open]:rounded-b-none data-[placeholder]:text-gray4">
          <Select.Value placeholder={`${label}을 선택해주세요`} />
          <Select.Icon className="absolute right-2.5">
            <AuthDropDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position={'popper'}
            collisionPadding={0}
            className="h-36 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-b-lg border-x border-b border-solid border-gray3 bg-white">
            <Select.Viewport>
              {options.map((option) => (
                <AuthDropDownOption key={option.id} id={option.id}>
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
