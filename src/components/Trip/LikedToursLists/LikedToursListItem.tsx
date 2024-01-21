import {
  ThumbsUp,
  ThumbsDown,
  ClickThumbsUp,
  ClickThumbsDown,
  StarIcon,
} from '@components/common/icons/Icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTripsLikeHate } from '@api/trips';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface LikedToursListItemProps {
  ourTripList: ourTripType;
  selectedTripId: string;
}

const LikedToursListItem: React.FC<LikedToursListItemProps> = ({
  ourTripList,
  selectedTripId,
}) => {
  const {
    tourItemId,
    ratingAverage,
    reviewCount,
    prefer,
    notPrefer,
    preferTotalCount,
    notPreferTotalCount,
    smallThumbnailUrl,
    tourAddress,
    title,
  } = ourTripList;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [thumbsState, setThumbsState] = useState({
    prefer: false,
    notPrefer: false,
  });

  const { mutate: thumbsUpMutate } = useMutation({
    mutationFn: () =>
      postTripsLikeHate(
        selectedTripId,
        tourItemId,
        thumbsState.prefer,
        thumbsState.notPrefer,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ourTrips'] });
    },
    onError: () => console.log('error'),
  });

  const onClickThumbsUpButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setThumbsState({ prefer: true, notPrefer: false });
    thumbsUpMutate();
  };

  const onClickThumbsDownButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setThumbsState({ prefer: false, notPrefer: true });
    thumbsUpMutate();
  };

  return (
    <div
      className={`relative cursor-pointer pb-[4px]`}
      onClick={() => navigate(`/detail/${tourItemId}`)}>
      <div className="flex">
        <div>
          <img
            className="rounded-1 h-[72px] max-h-[72px] w-[72px] rounded-[16px] object-cover"
            src={smallThumbnailUrl}
            alt="여행지 이미지"
          />
        </div>

        <div className="ml-[8px] flex flex-col items-start justify-between gap-[1px]">
          <div className="max-w-[270px]">
            <p className=" truncate  whitespace-nowrap px-[2px] font-['Pretendard'] text-[16px] font-bold leading-normal text-black">
              {title}
            </p>

            <div className="flex items-center">
              <div className="mr-[5px] flex items-center">
                <div>
                  <StarIcon size={12.5} color="#FFEC3E" fill="#FFEC3E" />
                </div>

                <div>
                  <span className="ml-1 mr-0.5 text-[14px] font-normal text-gray4">
                    {(Math.ceil(ratingAverage * 100) / 100).toFixed(1)}
                  </span>
                  <span className="text-[14px] text-gray4">
                    ({reviewCount ? reviewCount.toLocaleString() : reviewCount})
                  </span>
                </div>
              </div>

              <div className="max-w-[200px] ">
                <p className="truncate text-[14px] text-gray4">
                  {tourAddress ? tourAddress : '주소를 제공하지 않고 있어요'}
                </p>
              </div>
            </div>
          </div>

          <div className="caption1 flex justify-center leading-normal text-gray4">
            <div className="flex items-center justify-center ">
              <button
                onClick={onClickThumbsUpButton}
                className="mr-[4px] flex min-h-[24px] min-w-[46px] items-center justify-center rounded border border-solid border-gray-400 px-[8px] py-[1px] opacity-80">
                {prefer ? <ClickThumbsUp /> : <ThumbsUp />}
                <span className="pl-[2px] text-[14px] text-gray7">
                  {preferTotalCount}
                </span>
              </button>
              <button
                onClick={onClickThumbsDownButton}
                className="flex min-h-[24px] min-w-[46px] items-center justify-center rounded border border-solid  border-gray-400  px-[8px] py-[1px] opacity-80">
                {notPrefer ? <ClickThumbsDown /> : <ThumbsDown />}
                <span className="pl-[2px] text-[14px] text-gray7">
                  {notPreferTotalCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedToursListItem;
