import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTripsLikeHate } from '@api/trips';
import {
  ThumbsUp,
  ThumbsDown,
  ClickThumbsUp,
  ClickThumbsDown,
  StarIcon,
} from '@components/common/icons/Icons';

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
    prefer: prefer,
    notPrefer: notPrefer,
  });

  const { mutate: thumbsMutate } = useMutation({
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
    setThumbsState((prev) => ({
      prefer: !prev.prefer,
      notPrefer: false,
    }));
    thumbsMutate();
  };

  const onClickThumbsDownButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setThumbsState((prev) => ({
      prefer: false,
      notPrefer: !prev.notPrefer,
    }));
    thumbsMutate();
  };

  return (
    <div
      className={`relative mb-[6px] flex max-h-[72px] cursor-pointer`}
      onClick={() => navigate(`/detail/${tourItemId}`)}>
      <div className="flex">
        <div>
          <img
            className="rounded-1 h-[72px] max-h-[72px] w-[72px] rounded-[8px] object-cover"
            src={smallThumbnailUrl}
            alt="여행지 이미지"
          />
        </div>

        <div className="ml-[16px] flex max-h-[72px] flex-col items-start">
          <div className="mt-[-5px] flex max-w-[230px] flex-col">
            <p className="truncate whitespace-nowrap text-[16px] font-bold leading-normal text-black ">
              {title}
            </p>

            <div className="mb-[8.5px] mt-[-4px] flex  items-center">
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

              <div className="max-w-[180px] ">
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
