import { getTripsjoin } from '@api/trips';
import CopyBox from '@components/Share/CopyBox';
import { BackBox } from '@components/common';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Share = () => {
  const navigate = useNavigate();
  const [joinCode, setJoinCode] = useState<string | null>(null);

  useEffect(() => {
    const getTripCode = async () => {
      try {
        const { data } = await getTripsjoin(27);
        if (data.status === 200) {
          setJoinCode(data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getTripCode();
  }, []);
  return (
    <div className="min-h-[90vh]">
      <BackBox
        showBack
        backHandler={() => {
          navigate(-1);
        }}>
        공유하기
      </BackBox>
      <div className="mt-6 flex flex-col gap-10">
        <CopyBox
          title="링크"
          subTitle="링크를 복사해서 여행 계획을 공유해보세요."
          copyValue="adsfgsgfhdsfghjgfdaesdfghcjvhgf"
        />
        {joinCode && (
          <CopyBox
            title="편집 참여 코드"
            subTitle="편집 참여 코드를 입력하면 여행 계획을 편집할 수 있어요."
            copyValue={joinCode}
          />
        )}
      </div>
    </div>
  );
};

export default Share;
