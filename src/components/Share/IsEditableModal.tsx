import * as Dialog from '@radix-ui/react-dialog';
import { EditStarIcon } from '@components/common/icons/Icons';
import Alert from '@components/common/alert/Alert';
import { useLocation, useNavigate } from 'react-router-dom';
import { getItem } from '@utils/localStorageFun';

interface Props {
  isEditable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsEditableModal = ({ isEditable, setIsEditable }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isLogin = getItem('accessToken');

  const handleConfirm = () => {
    navigate('/login', { state: { prevPath: `${pathname}/code` } });
  };

  return (
    <Dialog.Root open={isEditable} onOpenChange={setIsEditable} modal>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-[101] bg-black opacity-70" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed bottom-0 left-[50%] z-[101] flex w-full max-w-[412px] translate-x-[-50%] flex-col items-center rounded-t-2xl bg-white px-5 pb-8 pt-9">
          <Dialog.Title className="title3 pb-2.5 text-center text-gray7">
            편집 참여 코드를 입력하시면
            <br />
            여행 계획을 함께 편집할 수 있어요!
          </Dialog.Title>
          <Dialog.Description className="pb-8">
            <EditStarIcon />
          </Dialog.Description>
          {isLogin ? (
            <button
              onClick={() => {
                navigate('code');
              }}
              className="headline1 mb-4 h-14 w-full rounded-lg bg-main2 text-white outline-none">
              초대코드 입력하기
            </button>
          ) : (
            <Alert
              title={'로그인'}
              message={
                <>
                  편집 참여 코드 입력을 위해 로그인이 필요해요.
                  <br />
                  로그인하시겠어요?
                </>
              }
              onConfirm={handleConfirm}>
              <button className="headline1 mb-4 h-14 w-full rounded-lg bg-main2 text-white outline-none">
                초대코드 입력하기
              </button>
            </Alert>
          )}
          <Dialog.Close asChild>
            <button className="body1 text-gray5">보기만 할게요</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default IsEditableModal;
