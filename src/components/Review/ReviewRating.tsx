import React, { useState } from 'react';
import { StarIcon } from '@components/common/icons/Icons';

const ReviewRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: number) => {
    const newRating = index + 1;
    setRating((prevRating) =>
      prevRating === newRating ? prevRating : newRating,
    );
  };

  return (
    <div className="mb-6 flex flex-col items-center justify-center">
      <div className="mb-4 font-bold">(호텔 이름)</div>
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            size={30}
            color="none"
            fill={index < rating ? '#FFEC3E' : '#EDEDED'}
            onClick={() => handleStarClick(index)}
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewRating;
