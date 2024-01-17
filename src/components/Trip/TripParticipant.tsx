import { ReactComponent as NullUser } from '@assets/images/NullUser.svg';
import { useRecoilValue } from 'recoil';
import { participantsState } from '@recoil/trip';

interface ParticipantStatusProps {
  status: string;
}

const ParticipantList: React.FC<{ infos: any[] }> = ({ infos }) => (
  <div className="grid grid-cols-2 gap-3.5">
    {infos.map((info: any) => (
      <div
        key={info.memberId}
        className={`flex h-[40px] cursor-pointer items-center text-gray5`}>
        {info.thumbnail && info.thumbnail !== 'http://asiduheimage.jpg' ? (
          <img
            src={info.thumbnail}
            alt="유저 프로필"
            className="h-[32px] w-[32px] rounded-full"
          />
        ) : (
          <NullUser className="h-[32px] w-[32px]" />
        )}
        <div className="ml-3">{info.nickname}</div>
      </div>
    ))}
  </div>
);

export const ParticipantStatus: React.FC<ParticipantStatusProps> = ({
  status,
}) => {
  const participants = useRecoilValue(participantsState);

  return (
    <div className="flex flex-col">
      <div className="mb-4 ml-auto mr-2 text-xs text-gray5">
        {status == '참여' ? (
          <>{participants?.tripSurveyMemberCount}명 참여</>
        ) : (
          <>{participants?.nonTripSurveySetMemberInfos?.length}명 미참여</>
        )}
      </div>
      {status == '참여' ? (
        <ParticipantList infos={participants?.tripSurveySetMemberInfos} />
      ) : (
        <ParticipantList infos={participants?.nonTripSurveySetMemberInfos} />
      )}
    </div>
  );
};
