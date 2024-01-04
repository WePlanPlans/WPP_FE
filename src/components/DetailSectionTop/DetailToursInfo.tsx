import { ReactComponent as HeartIcon } from '@assets/images/Heart.svg';

interface DetailToursInfoProps {
  infoData: tourDetail;
}

export default function DetailToursInfo({ infoData }: DetailToursInfoProps) {
  const { title, liked, originalThumbnailUrl } = infoData;

  return (
    <>
      <div className="column mt-1 flex aspect-[3/2] h-[11.938rem] w-full items-start overflow-hidden rounded-lg">
        <img
          src={originalThumbnailUrl}
          alt="tour-image"
          className="h-full w-full"
        />
      </div>
      <div className="mt-1 flex w-full items-center justify-between py-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        {liked ? (
          <div className="top-75 h-[24px] w-[24px] cursor-pointer">
            <HeartIcon fill="red" />
          </div>
        ) : (
          <div className="top-75 h-[24px] w-[24px] cursor-pointer">
            <HeartIcon fill="#D7D7D7" />
          </div>
        )}
      </div>
    </>
  );
}
