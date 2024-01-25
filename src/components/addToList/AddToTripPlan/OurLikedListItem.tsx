import { LikedListType } from '@/@types/tours.types';
import { ListCheckBtn } from '@components/common/button/ListSelectBtn';
import { StarIcon } from '@components/common/icons/Icons';
import { selectedItemsState } from '@recoil/listItem';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface WishItemProps {
  wishList: LikedListType;
}

export const OurLikedListItem: React.FC<WishItemProps> = ({ wishList }) => {
  const {
    tourItemId,
    title,
    ratingAverage,
    reviewCount,
    smallThumbnailUrl,
    tourAddress,
  } = wishList;

  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedItems([]);
  }, []);

  const handleSelect = () => {
    if (selectedItems.includes(tourItemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== tourItemId));
    } else {
      setSelectedItems([...selectedItems, tourItemId]);
    }
  };

  return (
    <div
      className="flex h-[48px] w-full cursor-pointer items-center justify-center"
      onClick={() => navigate(`/detail/${tourItemId}`)}>
      <div className="imgWrap mr-[16px] flex-shrink-0 overflow-hidden rounded-lg">
        <img
          className="size-[44px] object-cover"
          src={smallThumbnailUrl}
          alt={title}
        />
      </div>
      <div className="textWrap flex flex-grow flex-col justify-between overflow-hidden py-1.5">
        <div className="name body3 truncate">{title}</div>
        <div className="flex">
          <div className="flex items-center justify-center">
            <StarIcon size={12.5} color="#FFEC3E" fill="#FFEC3E" />
          </div>
          <span className="body4 mx-[4px] shrink-0 text-gray4">
            {ratingAverage.toFixed(1)}({reviewCount})
          </span>
          <span className="address body4 mr-[6px] truncate text-gray4">
            {tourAddress ? tourAddress : '제공되는 주소가 없습니다.'}
          </span>
        </div>
      </div>
      <ListCheckBtn onClick={handleSelect} />
    </div>
  );
};
