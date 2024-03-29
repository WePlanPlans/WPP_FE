interface LikedToursListCategoryItemProps {
  category: { code: number | null; name: string };
  onCategoryClick: (contentTypeId: number | null) => void;
  onSelect: (name: string) => void;
  isSelected: boolean;
}

export const LikedToursListCategoryItem: React.FC<
  LikedToursListCategoryItemProps
> = ({ category, onCategoryClick, onSelect, isSelected }) => {
  const handleCategoryClick = () => {
    if (category.code !== undefined) {
      onCategoryClick(category.code);
      onSelect(category.name);
    }
  };

  const buttonStyle = isSelected
    ? 'bg-[#28D8FF] text-white font-bold border-[#28D8FF]'
    : 'bg-[#fff] text-[#888] border-[#ededed]';

  return (
    <button
      onClick={handleCategoryClick}
      className={`body4 mr-[5px] flex items-center justify-center whitespace-nowrap rounded-[30px] border border-solid bg-[#28D8FF] px-[18px] py-[7px] leading-normal ${buttonStyle}`}>
      {category.name}
    </button>
  );
};
