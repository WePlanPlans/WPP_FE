import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@components/common/alert/Alert';
import { getItem } from '@utils/localStorageFun';

const CreateTripButton = () => {
  const navigate = useNavigate();
  const [, setShowAlert] = useState<boolean>(false);
  const isLogin = getItem('accessToken');

  const handleCreateTrip = async () => {
    if (isLogin) {
      navigate('/create');
    } else {
      setShowAlert(true);
    }
  };

  const handleConfirm = () => {
    navigate('/login');
  };

  return (
    <>
      <Alert
        title={'로그인'}
        message={
          <>
            나의 여정 조회를 위해 로그인이 필요합니다.
            <br />
            로그인 하시겠습니까?
          </>
        }
        onConfirm={handleConfirm}>
        <div className="sticky bottom-20 z-[100] ml-auto mr-2 flex h-12 w-[119px] items-center justify-center gap-2 rounded-[30px] bg-[#28d8ff] p-2 shadow-[2px_2px_5px_0_rgba(0,0,0,0.2)]">
          <button
            className="headline1 pt-[2px] text-white"
            onClick={handleCreateTrip}>
            여행 계획하기
          </button>
        </div>
      </Alert>
    </>
  );
};

export default CreateTripButton;
