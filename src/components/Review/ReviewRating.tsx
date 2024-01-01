import { StarIcon } from '@components/common/icons/Icons';

export default function ReviewRating() {
  return (
    <div className=" mb-6 flex flex-col items-center justify-center">
      <div className="mb-4 font-bold">(호텔 이름)</div>
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            size={30}
            color="none"
            fill={index < 3 ? '#FFEC3E' : '#EDEDED'}
          />
        ))}
      </div>
    </div>
  );
}
