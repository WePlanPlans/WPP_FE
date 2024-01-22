import { ToursCategoryItemProps } from '@/@types/tours.types';

const ToursCategoryItem = ({
  name,
  isSelected,
  onSelect,
}: ToursCategoryItemProps) => {
  const buttonStyle = isSelected
    ? 'bg-[#28D8FF] text-white font-bold'
    : 'bg-[#fff] text-[#888] border-[#ededed]';

  return (
    <button
      type="button"
      onClick={() => onSelect(name)}
      className={`body4 mr-[5px] flex items-center justify-center whitespace-nowrap rounded-[30px] border border-solid bg-[#28D8FF] px-[18px] py-[7px] leading-normal ${buttonStyle}`}>
      {name}
    </button>
  );
};

export default ToursCategoryItem;
