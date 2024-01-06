interface Props {
  children: string;
}

const ErrorMessage = ({ children }: Props) => {
  return <p className="body6 text-red">{children}</p>;
};

export default ErrorMessage;
