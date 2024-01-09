import { DownIcon } from '@components/common/icons/Icons';

interface Props {
  children: string;
  clickHandler?: VoidFunction;
  showDownIcon?: boolean;
}

const AuthDropDownOption = ({
  children,
  clickHandler,
  showDownIcon = false,
}: Props) => {
  return (
    <button
      onClick={clickHandler}
      className="relative h-12 w-full border-b border-solid border-gray3 hover:bg-gray1">
      {children}
      {showDownIcon && (
        <div className="absolute right-2 top-4">
          <DownIcon size={20} color="#888888" />
        </div>
      )}
    </button>
  );
};

export default AuthDropDownOption;
