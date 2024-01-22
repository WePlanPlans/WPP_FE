import { deleteTrips, postTripsjoin } from '@api/trips';
import CodeInput from '@components/Share/CodeInput';
import Alert from '@components/common/alert/Alert';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { DeleteIcon, PenIcon } from '@components/common/icons/Icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ToastPopUp from '@components/common/toastpopup/ToastPopUp';
import { getItem } from '@utils/localStorageFun';

const EditCodeModal = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputCode, setInputCode] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const { id: tripId } = useParams();
  const { tripAuthority } = useGetTripsAuthority();

  const queryClient = useQueryClient();

  const { mutate: deleteMutate } = useMutation({
    mutationFn: (tripId: string) => deleteTrips(tripId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myTrips'] });
    },
    onError: () => console.log('error'),
  });

  const handleDelete = () => {
    if (tripId) {
      deleteMutate(tripId);
    }
    setIsEditModal(false);
    setIsToastVisible(true);
    setTimeout(() => navigate('/mytrip'), 2000);
  };

  const handleConfirm = async () => {
    if (tripId) {
      try {
        const { data } = await postTripsjoin(tripId, inputCode);
        if (data.status === 200) {
          setIsModalOpen(false);
        }
      } catch (err) {
        setShowError(true);
        setInputCode('');
        console.error('참여 코드 요청 중 에러 발생', err);
      }
    }
  };

  const isLogin = getItem('accessToken');
  const { pathname } = useLocation();
  const handleLoginConfirm = () => {
    navigate('/login', { state: { prevPath: `${pathname}/code` } });
  };

  return (
    <>
      {isToastVisible && <ToastPopUp noun="여행 일정" verb="삭제" />}
      {isLogin ? (
        tripAuthority === 'WRITE' ? (
          <Dialog.Root modal>
            <Dialog.Trigger asChild>
              <button
                onClick={() => setIsEditModal(true)}
                className="body3 rounded-lg border-[1px] border-solid border-gray2 px-[10px] py-[8px] text-gray4">
                편집
              </button>
            </Dialog.Trigger>
            {isEditModal && (
              <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-10 bg-black opacity-70" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed bottom-0 left-[50%] z-10 flex w-[412px] translate-x-[-50%] flex-col items-center rounded-t-2xl bg-white px-5 pb-8 pt-9">
                  <Dialog.Title className="headline2 mr-auto pb-2.5 text-gray7">
                    나의 여정
                  </Dialog.Title>

                  <>
                    <button
                      onClick={() => navigate('edit')}
                      className="body1 minh-6 mb-2 mr-auto flex w-full items-center rounded-lg py-2 font-medium text-gray7 outline-none">
                      <PenIcon size={24} color="#888888" />
                      <span className="pl-[8px]">수정하기</span>
                    </button>
                    <Alert
                      title="여행 나가기"
                      message="선택한 여행에서 나가시겠습니까?"
                      onConfirm={handleDelete}
                      closeOnConfirm={true}>
                      <button className="body1 mb-2 mr-auto flex min-h-6 w-full items-center rounded-lg py-2 font-medium text-gray7 outline-none">
                        <DeleteIcon size={24} color="#888888" />
                        <span className="pl-[8px]">여행 나가기</span>
                      </button>
                    </Alert>
                  </>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </Dialog.Root>
        ) : (
          <Alert
            title="편집 참여 코드 입력"
            content={
              <CodeInput
                inputCode={inputCode}
                setInputCode={setInputCode}
                showError={showError}
              />
            }
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            onConfirm={handleConfirm}>
            <button className="body3 rounded-lg border-[1px] border-solid border-gray2 px-[10px] py-[8px] text-gray4">
              편집
            </button>
          </Alert>
        )
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
          onConfirm={handleLoginConfirm}>
          <button className="body3 rounded-lg border-[1px] border-solid border-gray2 px-[10px] py-[8px] text-gray4">
            편집
          </button>
        </Alert>
      )}
    </>
  );
};

export default EditCodeModal;
