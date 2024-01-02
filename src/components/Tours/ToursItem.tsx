import { HeartIcon, StarIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';

interface TourType {
  id: number;
  title: string;
  liked: boolean;
  likedCount: number;
  ratingAverage: number;
  reviewCount: number;
  smallThumbnailUrl: string;
}
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
      <div>
        <img
          className="rounded-1 h-[134px] max-h-[134px] w-[160px] rounded-[16px] object-cover"
          src={smallThumbnailUrl}
          alt="여행지 이미지"
        />
        <div className="relative left-32 top-[-125px] z-10">
          <HeartIcon
            size={24}
            color={liked ? '#ff2167' : '#ffffff'}
            fill={liked ? '#ff2167' : '#D7D7D7'}
          />
        </div>
      </div>
      <p className="headline1 ml-[1px] mt-[-14px] overflow-hidden text-ellipsis whitespace-nowrap leading-normal">
        {title}
      </p>
      <div className="caption2 flex items-center leading-normal text-gray4">
        <div className="mr-[5px] flex items-center">
          <StarIcon size={16} color="#FFEC3E" fill="#FFEC3E" />
          <div className="flex items-center pt-[1.5px]">
            <span className="ml-1 mr-0.5 font-bold">{ratingAverage}</span>
            <span>({reviewCount})</span>
          </div>
        </div>
        <div className="flex items-center">
          <HeartIcon size={16} color="#FF2167" fill="#FF2167" />
          <span className="ml-1 pt-[1.5px]">{likedCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ToursItem;
