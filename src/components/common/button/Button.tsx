import { ReactNode } from 'react';
interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const ButtonWhite: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="btn-base rounded-lg border border-solid border-gray3 text-sm">
      {children}
    </button>
  );
};

export const ButtonPrimary: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className="btn-base bg-primary text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-gray3"
      disabled={disabled}>
      {children}
    </button>
  );
};
