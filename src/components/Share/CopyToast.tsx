import * as Toast from '@radix-ui/react-toast';
import { ReactNode, useState } from 'react';
import { ReactComponent as CircleCheckIcon } from '@assets/images/CircleCheck.svg';

interface Props {
  title: string;
  children: ReactNode;
}

const CopyToast = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider duration={2000}>
      <button
        onClick={() => {
          setOpen(true);
        }}>
        {children}
      </button>

      <Toast.Root
        className="bg-main4  flex h-16 w-[370px] items-center rounded-lg border border-solid border-main2 px-4 py-2 shadow-md"
        open={open}
        onOpenChange={setOpen}>
        <CircleCheckIcon fill="#29DDF6" className="mr-2" />
        <Toast.Title className="body4 text-main1 [grid-area:_title]">
          {`${title}가 복사되었습니다.`}
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="fixed left-[50%] top-12 translate-x-[-50%]" />
    </Toast.Provider>
  );
};

export default CopyToast;
