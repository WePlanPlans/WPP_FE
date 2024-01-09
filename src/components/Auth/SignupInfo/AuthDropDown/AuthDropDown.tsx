import { useState } from 'react';
import AuthDropDownOption from './AuthDropDownOption';
import * as Select from '@radix-ui/react-select';

interface Props {
  label: string;
  text: string;
  options: SelectOption[];
}

const AuthDropDown = ({ label, text, options }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>(text);

  return (
    <div className="z-10 flex flex-col">
      <h2 className="body2 mb-2 text-main1">{label}</h2>
      <div
        onClick={() => setIsShow(!isShow)}
        className={`${
          isShow ? 'h-48' : 'h-12'
        } relative w-full overflow-hidden rounded-lg border border-solid border-gray3`}>
        <AuthDropDownOption
          clickHandler={() => {
            setIsShow(!isShow);
          }}
          showDownIcon>
          {isSelected}
        </AuthDropDownOption>
        {isShow && (
          <ul className="absolute top-12 z-20 h-36 w-full overflow-auto rounded-b-lg bg-white">
            {options.map((option) => (
              <li className="h-12 ">
                <AuthDropDownOption
                  clickHandler={() => {
                    setIsSelected(option.value);
                    setIsShow(!isShow);
                  }}>
                  {option.value}
                </AuthDropDownOption>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AuthDropDown;

// ${
//   isShow ? 'h-48' : 'h-12'
// }
