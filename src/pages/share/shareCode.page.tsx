import { postTripsjoin } from '@api/trips';
import { BackBox } from '@components/common';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const shareCode = () => {
  const navigate = useNavigate();
  const { tripAuthority, tripId } = useGetTripsAuthority();

  useEffect(() => {
    if (tripAuthority === 'WRITE' && tripId) {
      alert('이미 편집 가능한 여정입니다.');
      navigate(`/trip/${tripId}`, { replace: true });
    }
  }, [tripAuthority, tripId]);

  const [inputCode, setInputCode] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const onCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = e.target.value;
    if (changeValue.length <= 5) {
      setInputCode(e.target.value);
    }
    if (changeValue.length === 5 && tripId) {
      try {
        const { data } = await postTripsjoin(tripId, changeValue);
        if (data.status === 200) {
          navigate(`/trip/${tripId}`, { replace: true });
        }
      } catch (err) {
        setShowError(true);
        setInputCode('');
        console.error('참여 코드 요청 중 에러 발생', err);
      }
    }
  };

  return (
    <div className="min-h-[90vh]">
      <BackBox
        showBack
        backHandler={() => {
          navigate(-1);
        }}
      />
      <div className="flex flex-col items-center">
        <div className="mb-14 mt-16 flex flex-col items-center gap-3">
          <span className="title1 text-gray7">편집 참여 코드 입력</span>
          <span className="body4 text- text-center text-gray7">
            편집 참여 코드를 입력하면 여행 계획을 편집할 수 있어요.
          </span>
        </div>

        <div className="mb-6 flex h-9 justify-center gap-4">
          <input
            type="number"
            autoFocus
            maxLength={5}
            className="absolute h-9 w-48 bg-transparent text-transparent caret-transparent outline-none selection:bg-transparent"
            onChange={onCodeChange}
            value={inputCode}
          />
          {inputCode.split('').map((code, index) => {
            return (
              <div
                key={index}
                className="title1 flex w-6 justify-center border-b-2 border-solid border-main2">
                {code}
              </div>
            );
          })}
          {Array(5 - inputCode.length)
            .fill(null)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className="title1 flex w-6 justify-center border-b-2 border-solid border-gray3"></div>
              );
            })}
        </div>
        {showError && (
          <div className="body5 text-red">
            편집 참여 코드를 다시 한번 확인해주세요.
          </div>
        )}
      </div>
    </div>
  );
};

export default shareCode;
