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
      className="btn-base border-gray3 rounded-lg border border-solid text-sm">
      {children}
    </button>
  );
};

export const ButtonPrimary: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="btn-base disabled:bg-gray3 bg-primary text-lg font-bold text-white disabled:cursor-not-allowed">
      {children}
    </button>
  );
};
