import { ButtonPrimary } from '@components/common/button/Button';

interface ButtonProps {
  onClick: () => void;
}

const ReviewButton = (props: ButtonProps) => {
  const { onClick } = props;
  return <ButtonPrimary onClick={onClick}>완료</ButtonPrimary>;
};

export default ReviewButton;
