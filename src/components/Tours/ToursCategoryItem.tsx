interface RegionTypes {
  areaCode?: number;
  subAreaCode?: number;
  name: string;
}

interface ToursCategoryItemProps extends RegionTypes {
  isSelected: boolean;
  onSelect: (name: string) => void;
}

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
      className={`mr-[4px] flex items-center justify-center whitespace-nowrap rounded-[30px] border border-solid bg-[#28D8FF] px-[16px] py-[7px] text-[14px] leading-normal ${buttonStyle}`}>
      {name}
    </button>
  );
};

export default ToursCategoryItem;
