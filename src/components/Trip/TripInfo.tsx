import { TripSchedule } from './TripSchedule';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isModalOpenState, modalChildrenState } from '@recoil/modal';
import TripSurveyMember from '@components/common/modal/children/TripSurveyMember';
import { Modal } from '@components/common/modal';
import { useQuery } from '@tanstack/react-query';
import { getTripsMembers } from '@api/trips';
import { DownIcon } from '@components/common/icons/Icons';
import { useState } from 'react';
import { UserIcon } from '@components/common/icons/Icons';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';

const ShareList = () => {
  const { tripId } = useGetTripsAuthority();

  const { data: tripsMembers } = useQuery({
    queryKey: ['tripsMembers', tripId],
    queryFn: () =>
      tripId != null
        ? getTripsMembers(tripId)
        : Promise.reject('tripId is null'),
    enabled: !!tripId,
  });
  const members = tripsMembers?.data?.data?.tripMemberSimpleInfos;
  return (
    <>
      <hr className="my-3 border-solid border-gray2" />
      <div className="max-h-[115px] overflow-y-auto">
        {members.map((member: TripMemeberInfo, index: number) => {
          return (
            <div
              className={`mb-2 flex cursor-pointer items-center text-gray5`}
              key={index}>
              {member.profileImageUrl &&
              member.profileImageUrl !== 'http://asiduheimage.jpg' ? (
                <img
                  src={member.profileImageUrl}
                  alt="유저 프로필"
                  className="h-[32px] w-[32px] rounded-full"
                />
              ) : (
                <div
                  className={
                    'flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#EDEDED]'
                  }>
                  <UserIcon size={20} color="white" fill="white" />
                </div>
              )}
              <div className="ml-3">{member.nickname}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const TripInfo = () => {
  const { tripId } = useGetTripsAuthority();
  const modalChildren = useRecoilValue(modalChildrenState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [isAccordion, setIsAccordion] = useState(false);

  const { data: tripsMembers } = useQuery({
    queryKey: ['tripsMembers', tripId],
    queryFn: () =>
      tripId != null
        ? getTripsMembers(tripId)
        : Promise.reject('tripId is null'),
    enabled: !!tripId,
  });

  const members = tripsMembers?.data?.data?.tripMemberSimpleInfos;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickButton = () => {
    setIsAccordion((prev) => !prev);
  };

  if (!tripId) {
    return <div>error</div>;
  }

  return (
    <>
      <div className="my-5">
        <div className="flex items-center justify-between">
          <div className="flex  space-x-[-17.5px]">
            {members?.map((member: TripMemeberInfo, index: number) => (
              <div key={index}>
                {member.profileImageUrl &&
                member.profileImageUrl !== 'http://asiduheimage.jpg' ? (
                  <img
                    src={member.profileImageUrl}
                    alt="유저 프로필"
                    className="h-[32px] w-[32px] rounded-full border-2 border-solid border-white"
                  />
                ) : (
                  <div
                    className={
                      'flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#EDEDED]'
                    }>
                    <UserIcon size={20} color="white" fill="white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <p className="body1 text-[13px] text-gray7">
              {members?.length}명과 공유중
            </p>
            <div
              style={{
                transform: isAccordion ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
              onClick={handleClickButton}
              className="pt-0.5">
              <DownIcon color="#888888" size={20} />
            </div>
          </div>
        </div>

        {isAccordion && <ShareList />}
        <TripSchedule />
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalChildren === 'TripSurveyMember' && <TripSurveyMember />}
      </Modal>
    </>
  );
};

export default TripInfo;
