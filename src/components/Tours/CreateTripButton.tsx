import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@components/common/alert/Alert';
import { getMember } from '@api/member';

const CreateTripButton = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [, setShowAlert] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await getMember();
        if (res.data.status === 200) {
          setIsLogin(true);
        }
      } catch (err) {
        console.error(err);
        setIsLogin(false);
      } finally {
        setChecked(true);
      }
    };

    checkLoginStatus();
  }, []);

  const handleCreateTrip = () => {
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
      {checked && (
        <Alert
          title={'로그인'}
          message={
            <>
              여정을 계획하려면 로그인이 필요해요.
              <br />
              로그인하러 가볼까요?
            </>
          }
          onConfirm={handleConfirm}>
          <button
            className="headline1 sticky bottom-20 z-[100] ml-auto mr-2 flex h-12 w-[119px] items-center justify-center gap-2 rounded-[30px] bg-[#28d8ff] p-2 pt-[10px] text-white shadow-[2px_2px_5px_0_rgba(0,0,0,0.2)]"
            onClick={handleCreateTrip}>
            여행 계획하기
          </button>
        </Alert>
      )}
    </>
  );
};

export default CreateTripButton;
