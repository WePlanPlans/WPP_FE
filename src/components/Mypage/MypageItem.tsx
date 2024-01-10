import { RightIcon } from '@components/common/icons/Icons';
import { Link } from 'react-router-dom';

interface Props {
  link: string;
  children: string;
}

const MypageItem = ({ link, children }: Props) => {
  return (
    <Link
      to={link}
      className="flex h-14 w-full items-center justify-between py-2">
      <span className="body3 text-black">{children}</span>
      <RightIcon />
    </Link>
  );
};

export default MypageItem;
