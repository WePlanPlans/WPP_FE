import { ReactNode } from 'react';
interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export const ButtonWhite: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="btn-base rounded-lg border border-solid border-lightgray text-sm">
      {children}
    </button>
  );
};

export const ButtonPrimary: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="btn-base bg-primary text-lg font-bold text-white ">
      {children}
    </button>
  );
};
