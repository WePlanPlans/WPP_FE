import * as Select from '@radix-ui/react-select';

interface Props {
  id: string;
  children: string;
}

const AuthDropDownOption = ({ id, children }: Props) => {
  return (
    <Select.Item
      value={id}
      className="flex h-12 items-center justify-center border-b border-solid border-gray3">
      <Select.ItemText className="body5 text-gray6">{children}</Select.ItemText>
    </Select.Item>
  );
};

export default AuthDropDownOption;
