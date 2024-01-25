import { useNavigate } from 'react-router-dom';

export const ResultItem = ({ result }: { result: TourType }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${result.id}`); // 클릭 시 해당 경로로 이동
  };
  return (
    <div
      className="mb-[8px] flex h-[52px] w-full cursor-pointer py-1.5"
      onClick={handleClick}>
      <div className="imgWrap mr-2.5 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          className="h-10 w-10 object-cover"
          src={result.smallThumbnailUrl}
          alt={result.title}
        />
      </div>
      <div className="textWrap flex flex-grow flex-col justify-between overflow-hidden py-0.5">
        <div className="name body4 truncate">{result.title}</div>
        <span className="address body6 truncate text-gray4">
          {result.tourAddress}
        </span>
      </div>
    </div>
  );
};
