import { TourType } from '@/@types/tours.types';
import { ListSelectBtn } from '@components/common/button/ListSelectBtn';
import { StarIcon } from '@components/common/icons/Icons';
import { selectedItemsState } from '@recoil/listItem';
import { useRecoilState } from 'recoil';

export const ResultItemPlan = ({ result }: { result: TourType }) => {
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);
  const id = result.id;
  const handleSelect = () => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  return (
    <div className="mt-[14px] flex h-[52px] w-full py-1.5">
      <div className="imgWrap mr-[16px] flex-shrink-0 overflow-hidden rounded-lg">
        <img
          className="size-[44px] object-cover"
          src={result.smallThumbnailUrl}
          alt={result.title}
        />
      </div>
      <div className="textWrap flex flex-grow flex-col justify-between overflow-hidden py-0.5">
        <div className="name body3 truncate">{result.title}</div>
        <div className="flex">
          <div className="flex items-center justify-center">
            <StarIcon size={12.5} color="#FFEC3E" fill="#FFEC3E" />
          </div>
          <span className="body4 mx-[4px] shrink-0 text-gray4">
            {result.ratingAverage}({result.reviewCount})
          </span>
          <span className="address body4 mr-[6px] truncate text-gray4">
            {result.tourAddress}
          </span>
        </div>
      </div>
      <ListSelectBtn onClick={handleSelect}>선택</ListSelectBtn>
    </div>
  );
};
