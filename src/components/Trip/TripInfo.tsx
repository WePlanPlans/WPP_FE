import { UserIcon } from '@components/common/icons/Icons';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isModalOpenState, modalChildrenState } from '@recoil/modal';
import TripSurveyMember from '@components/common/modal/children/TripSurveyMember';
import { Modal } from '@components/common/modal';
import { useQuery } from '@tanstack/react-query';
import { getTripsMembers } from '@api/trips';
import { tripIdState } from '@recoil/socket';
import { ReactComponent as NullUser } from '@assets/images/NullUser.svg';
import { DownIcon } from '@components/common/icons/Icons';
import { useState } from 'react';

const ShareList = () => {
  const tripId = Number(useRecoilValue(tripIdState));
  const { data: tripsMembers } = useQuery({
    queryKey: ['tripsMembers', tripId],
    queryFn: () => getTripsMembers(tripId),
  });
  const members = tripsMembers?.data?.data?.tripMemberSimpleInfos;

  return (
    <>
      <hr className="my-3 border-solid border-gray2" />
      <div>
        {members.map((member: any, index: number) => {
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
                <NullUser className="h-[32px] w-[32px]" />
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
  const modalChildren = useRecoilValue(modalChildrenState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const tripId = Number(useRecoilValue(tripIdState));
  const [isAccordion, setIsAccordion] = useState(false);

  const { data: tripsMembers } = useQuery({
    queryKey: ['tripsMembers', tripId],
    queryFn: () => getTripsMembers(tripId),
  });
  const members = tripsMembers?.data?.data?.tripMemberSimpleInfos;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickButton = () => {
    setIsAccordion((prev) => !prev);
  };

  return (
    <>
      <div className="my-5">
        <div className="flex items-center justify-between">
          <div className="flex  space-x-[-17.5px]">
            {members?.map((member: any, index: number) => (
              <div key={index}>
                {member.profileImageUrl &&
                member.profileImageUrl !== 'http://asiduheimage.jpg' ? (
                  <img
                    src={member.profileImageUrl}
                    alt="유저 프로필"
                    className="h-[32px] w-[32px] rounded-full border-2 border-solid border-white"
                  />
                ) : (
                  <NullUser className="h-[32px] w-[32px] border-2 border-solid border-white" />
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
        <hr className="mb-6 mt-3 border-solid border-gray2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="title1 mb-[10px] mr-1">강릉 여행 일정</div>
            <div className="flex items-center pb-[10px]">
              <UserIcon size={20} fill="#888" color="#888" />
              <span className="body4 pt-[1px] text-gray4">5</span>
            </div>
          </div>
          <button className="body3 rounded-lg border-2 border-solid border-gray2 p-2 text-gray4">
            편집
          </button>
        </div>
        <span className="body1 text-gray4">23.12.23 - 23.12.25</span>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalChildren === 'TripSurveyMember' && <TripSurveyMember />}
      </Modal>
    </>
  );
};

export default TripInfo;
