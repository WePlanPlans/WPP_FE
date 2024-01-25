import { TourType } from '@/@types/tours.types';
import { HeartIcon, StarIcon } from '@components/common/icons/Icons';
import Like from '@components/common/like/Like';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface WishItemProps {
  wishList: TourType;
}

const WishItem: React.FC<WishItemProps> = ({ wishList }) => {
  const {
    id,
    title,
    liked,
    likedCount,
    ratingAverage,
    reviewCount,
    smallThumbnailUrl,
    tourAddress,
  } = wishList;

  const [isMetroIncluded, setIsMetroIncluded] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (tourAddress) {
      const isMetroCityIncluded = /특별시|광역시/.test(tourAddress);
      setIsMetroIncluded(isMetroCityIncluded);
    }
  }, []);

  return (
    <div
      className={`relative mb-[2px] cursor-pointer `}
      onClick={() => navigate(`/detail/${id}`)}>
      <div className="flex">
        <div>
          <img
            className="rounded-1 h-[72px] max-h-[72px] w-[72px] rounded-[8px] object-cover"
            src={smallThumbnailUrl}
            alt="여행지 이미지"
          />
          <div className="absolute right-[0px] top-[0px] z-10 w-[24px]">
            <Like liked={liked} id={id} />
          </div>
        </div>

        <div className="ml-[8px] flex flex-col items-start justify-between gap-[15px]">
          <div className=" max-w-[230px]">
            <p className=" truncate whitespace-nowrap px-[2px] text-[16px] font-bold leading-normal text-black">
              {title}
            </p>
            <div className="ml-[3px] mt-[5px] max-w-[260px]">
              <p className="truncate text-[14px] text-gray6">
                {isMetroIncluded && tourAddress
                  ? (tourAddress.match(/(.*?[시군구])/)?.[0] || '') +
                    (tourAddress
                      .replace(/(.*?[시군구])/, '')
                      .match(/(특별`시|광역시)?.*?[시군구]/)?.[0] || '')
                  : tourAddress?.match(/(.*?[시군구])/)?.[0]}
              </p>
            </div>
          </div>

          <div className="caption1 mb-[2px] ml-[3px] flex justify-center leading-normal text-gray4">
            <div className="mr-[5px] flex items-center">
              <div className="mb-[2px]">
                <StarIcon size={12.5} color="#FFEC3E" fill="#FFEC3E" />
              </div>
              <div className="flex items-center pt-[1.5px]">
                <span className="ml-1 mr-0.5 text-xs font-bold">
                  {(Math.ceil(ratingAverage * 100) / 100).toFixed(1)}
                </span>
                <span className="text-xs">
                  ({reviewCount ? reviewCount.toLocaleString() : reviewCount})
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <div className="mb-[0.5px]">
                <HeartIcon size={14} color="#FF2167" fill="#FF2167" />
              </div>
              <span className="ml-1 mt-[2.8px] text-xs">
                {likedCount ? likedCount.toLocaleString() : likedCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishItem;
