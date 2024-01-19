import { useState } from 'react';
import { LikedToursListCategoryItem } from './LikedToursListCategoryItem';

interface LikedToursListCategoryProps {
  onCategoryClick: (contentTypeId: number | null) => void;
}

const LikedToursListCategory: React.FC<LikedToursListCategoryProps> = ({
  onCategoryClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = [
    { code: null, name: '전체' },
    { code: 12, name: '관광지' },
    { code: 32, name: '숙소' },
    { code: 39, name: '식당' },
  ];

  const handleSelectCategory = (name: string) => {
    setSelectedCategory(name);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="no-scrollbar mb-6 flex w-[100%] overflow-scroll overflow-y-hidden bg-white">
      {categories.map((category) => {
        return (
          <LikedToursListCategoryItem
            key={category.code}
            category={category}
            onCategoryClick={onCategoryClick}
            isSelected={category.name === selectedCategory}
            onSelect={handleSelectCategory}
          />
        );
      })}
    </div>
  );
};

export default LikedToursListCategory;
