import React, { useState } from 'react';
import WishCategoryItem from './WishCategoryItem';

interface WishCategoryProps {
  onCategoryClick: (contentTypeId: number | null) => void;
}

const WishCategory: React.FC<WishCategoryProps> = ({ onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = [
    { code: null, name: '전체' },
    { code: 32, name: '숙소' },
    { code: 39, name: '식당' },
    { code: 12, name: '관광지' },
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
    <div className="no-scrollbar mb-[10px] mt-[10px] flex w-[100%] overflow-scroll overflow-y-hidden bg-white">
      {categories.map((category) => {
        return (
          <WishCategoryItem
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

export default WishCategory;
