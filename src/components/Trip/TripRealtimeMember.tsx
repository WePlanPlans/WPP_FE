import { socketContext } from '@hooks/useSocket';
import { useContext } from 'react';
import { UserIcon } from '@components/common/icons/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const TripRealtimeMember = () => {
  const { tripMember } = useContext(socketContext);

  const tripMemberData = tripMember?.data;

  return (
    <div className="my-5">
      <Swiper
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
        className="flex w-[375px] items-center justify-center">
        {tripMemberData?.tripMembers?.map((member) => {
          const isConnected = member?.connected;
          const thumbnailUrl = member?.thumbnailUrl;
          const isImageUrlValid =
            thumbnailUrl && thumbnailUrl !== 'http://asiduheimage.jpg';
          const imageUrl = isImageUrlValid ? thumbnailUrl : null;

          return (
            <SwiperSlide key={member?.memberId}>
              <div>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="유저 프로필"
                    className={`h-[48px] w-[48px] rounded-full ${
                      isConnected
                        ? 'border-2 border-solid border-[#29DDF6]'
                        : ''
                    }`}
                  />
                ) : (
                  <div
                    className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#EDEDED] ${
                      isConnected
                        ? 'border-2 border-solid border-[#29DDF6]'
                        : ''
                    }`}>
                    <UserIcon size={30} color="white" fill="white" />
                  </div>
                )}
                <div className="mt-1 flex w-[48px] items-center justify-center overflow-hidden whitespace-nowrap">
                  <span className="inline-block max-w-full overflow-hidden text-ellipsis text-[12px]">
                    {member?.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TripRealtimeMember;
