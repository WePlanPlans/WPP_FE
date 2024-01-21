import { postTripsjoin } from '@api/trips';
import CodeInput from '@components/Share/CodeInput';
import Alert from '@components/common/alert/Alert';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditCodeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputCode, setInputCode] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const { id: tripId } = useParams();
  const { tripAuthority } = useGetTripsAuthority();

  const handleConfirm = async () => {
    if (tripId) {
      try {
        const { data } = await postTripsjoin(Number(tripId), inputCode);
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

  return (
    <>
      {tripAuthority === 'WRITE' ? (
        <button className="body3 rounded-lg border-2 border-solid border-gray2 p-2 text-gray4">
          편집
        </button>
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
          <button className="body3 rounded-lg border-2 border-solid border-gray2 p-2 text-gray4">
            편집
          </button>
        </Alert>
      )}
    </>
  );
};

export default EditCodeModal;
