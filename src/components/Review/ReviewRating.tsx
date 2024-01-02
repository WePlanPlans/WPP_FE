import React, { useState } from 'react';
import { StarIcon } from '@components/common/icons/Icons';
import { useLocation } from 'react-router-dom';

const ReviewRating = () => {
  const [rating, setRating] = useState(0);
  const [isHalfClicked, setIsHalfClicked] = useState(false);
  const location = useLocation();
  const { state } = location;
  const { title } = state;

  const handleStarClick = (index: number) => {
    const newRating = index + 1;
    setRating((prevRating) => {
      const updatedIsHalfClicked =
        prevRating === newRating ? !isHalfClicked : false;
      setIsHalfClicked(updatedIsHalfClicked);
      // set함수가 비동기적이어서 업데이트된 값이 아래의 로직에 바로 반영되지 않기 때문에 updatedIsHalfClicked라는 변수를 통해 직접 계산하도록 설정
      const updatedRating = updatedIsHalfClicked ? prevRating - 0.5 : newRating;
      console.log('updatedRating', updatedRating);
      return updatedRating;
    });
  };

  return (
    <div className="mb-6 flex flex-col items-center justify-center">
      <div className="mb-1 text-xl font-bold">{title}</div>
      <button className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            size={30}
            color="none"
            fill={index < rating ? '#FFEC3E' : '#EDEDED'}
            onClick={() => handleStarClick(index)}
            isHalf={index === rating - 0.5 && isHalfClicked} // 클릭한 인덱스의 StarIcon이 isHalfClicked이면 해당 인덱스에만 linearGradient 반반 svg를 적용
            className="cursor-pointer"
          />
        ))}
      </button>
    </div>
  );
};

export default ReviewRating;
