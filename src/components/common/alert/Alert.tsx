import { ReactNode, FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface AlertProps {
  title: string;
  message: ReactNode;
  onConfirm: (() => void) | ((e: React.MouseEvent<HTMLElement>) => void);
  onCancel?: (() => void) | ((e: React.MouseEvent<HTMLElement>) => void);
  children: ReactNode;
  content?: ReactNode;
  closeOnConfirm?: boolean;
  isCheck?: number | null;
}

const Alert: FC<AlertProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
  children,
  content,
  closeOnConfirm = false,
  isCheck = true,
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild disabled={!isCheck}>
      {children}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[120] h-[100%] bg-black opacity-70" />
      <Dialog.Content
        className={`${
          content && 'pb-[16px] pt-10'
        } fixed left-[50%] top-[50%] z-[130] flex min-h-[192px] w-[346px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-[16px] bg-white shadow-lg focus:outline-none`}>
        <Dialog.Description
          className={`${
            content ? 'w-[80%] text-left' : 'text-center text-[15px]'
          } mt-[10px] font-bold leading-normal`}>
          <p
            className={` ${
              content && 'title3 text-left'
            } mb-[16px] font-bold text-[#062139] `}>
            {title}
          </p>
          <p className="font-medium text-[#888]">{message}</p>
        </Dialog.Description>
        {content}
        <div className="mt-[25px] flex justify-center gap-[13px]">
          <Dialog.Close asChild>
            <button
              onClick={onCancel}
              className="btn-base h-[48px] w-[134px] border border-solid border-gray3 bg-white p-[8px] text-[15px] font-bold text-[#888]">
              취소
            </button>
          </Dialog.Close>
          {closeOnConfirm ? (
            <Dialog.Close asChild>
              <button
                onClick={onConfirm}
                className="btn-base h-[48px] w-[134px] bg-main2 p-[8px] text-[15px] font-bold text-white">
                확인
              </button>
            </Dialog.Close>
          ) : (
            <button
              onClick={onConfirm}
              className="btn-base h-[48px] w-[134px] bg-main2 p-[8px] text-[15px] font-bold text-white">
              확인
            </button>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Alert;
