import { TourType } from '@/@types/tours.types';

export const ResultItem = ({ result }: { result: TourType }) => {
  return (
    <div className="flex h-[52px] w-full py-1.5">
      <div className="imgWrap mr-2.5 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          className="h-10 w-10 object-cover"
          src={result.smallThumbnailUrl}
          alt={result.title}
        />
      </div>
      <div className="textWrap flex flex-grow flex-col justify-between overflow-hidden py-0.5">
        <div className="name body3 truncate">{result.title}</div>
        <span className="address body6 truncate text-gray4">
          {result.tourAddress}
        </span>
      </div>
    </div>
  );
};
