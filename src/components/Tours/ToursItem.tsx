import { TourType } from '@/@types/tours.types';
import { HeartIcon, StarIcon } from '@components/common/icons/Icons';
import Like from '@components/common/like/Like';
import { useNavigate } from 'react-router-dom';

const ToursItem = ({ tour }: { tour: TourType }) => {
  const {
    id,
    title,
    liked,
    likedCount,
    ratingAverage,
    reviewCount,
    smallThumbnailUrl,
  } = tour;

  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer flex-col"
      onClick={() => navigate(`detail/${id}`)}>
      <div className="relative">
        <img
          className="rounded-1 h-[134px] max-h-[134px] w-[178px] rounded-[16px] object-cover"
          src={smallThumbnailUrl}
          alt="여행지 이미지"
        />
        <div className="absolute right-[8px] top-[8px] z-10 w-[24px]">
          <Like liked={liked} id={id} />
        </div>
      </div>
      <p className="headline1 mt-2 truncate px-[2px] font-semibold leading-normal">
        {title}
      </p>
      <div className="caption1 ml-[2px] flex items-start leading-normal text-gray4">
        <div className="mr-[5px] flex items-center">
          <div className="mb-[2px]">
            <StarIcon size={16} color="#FFEC3E" fill="#FFEC3E" />
          </div>
          <div className="flex items-center pt-[1.5px]">
            <span className="ml-1 mr-0.5 font-bold">
              {(Math.ceil(ratingAverage * 100) / 100).toFixed(1)}
            </span>
            <span>({reviewCount.toLocaleString()})</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mb-[2px]">
            <HeartIcon size={16} color="#FF2167" fill="#FF2167" />
          </div>
          <span className="ml-0.5 mt-[1.5px]">
            {likedCount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToursItem;
