import { useRecoilValue } from 'recoil';
import { tripIdState, memberIdState } from '@recoil/socket';
import { useEffect } from 'react';
import { socketContext } from '@hooks/useSocket';
import { useContext } from 'react';
import { pubConnectMember, pubDisconnectMember } from '@api/socket';
import { UserIcon } from '@components/common/icons/Icons';

const TripRealtimeEditor = () => {
  const tripId = useRecoilValue(tripIdState);
  const pubMember = useRecoilValue(memberIdState);
  if (!pubMember || !tripId) {
    return <div>에러</div>;
  }

  const { callBackPub, tripMember } = useContext(socketContext);

  useEffect(() => {
    callBackPub(() => pubConnectMember(pubMember, tripId));
    return () => {
      callBackPub(() => pubDisconnectMember(pubMember, tripId));
    };
  }, []);

  const tripMemberData = tripMember?.data;

  return (
    <div className="mb-8 mt-5 flex items-center gap-5 ">
      {tripMemberData?.tripMembers?.map((member) => {
        const isConnected = member?.connected;
        const thumbnailUrl = member?.thumbnailUrl;
        const isImageUrlValid =
          thumbnailUrl && thumbnailUrl !== 'http://asiduheimage.jpg';
        const imageUrl = isImageUrlValid ? thumbnailUrl : null;

        return (
          <div key={member?.memberId} className="h-[48px] w-[48px]">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="유저 프로필"
                className={`h-full w-full rounded-full ${
                  isConnected ? 'border-2 border-solid border-[#29DDF6]' : ''
                }`}
              />
            ) : (
              <div
                className={`flex h-full w-full items-center justify-center rounded-full bg-[#EDEDED] ${
                  isConnected ? 'border-2 border-solid border-[#29DDF6]' : ''
                }`}>
                <UserIcon size={30} color="white" fill="white" />
              </div>
            )}
            <div className="mt-0.5 flex w-[48px] items-center justify-center overflow-hidden whitespace-nowrap">
              <span className="inline-block max-w-full overflow-hidden text-ellipsis text-[12px]">
                {member?.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TripRealtimeEditor;
