import Like from '@components/common/like/Like';

interface DetailToursInfoProps {
  infoData: tourDetail;
}

export default function DetailToursInfo({ infoData }: DetailToursInfoProps) {
  const { title, liked, originalThumbnailUrl, id } = infoData;

  return (
    <>
      <div className="column flex aspect-[3/2] max-h-[176px] w-full items-start overflow-hidden rounded-lg">
        <img
          src={originalThumbnailUrl}
          alt="tour-image"
          className="h-full w-full"
        />
      </div>
      <div className="mt-1 flex w-full items-center justify-between py-2">
        <h1 className="text-2xl font-bold text-black ">{title}</h1>
        <Like liked={liked} id={id} />
      </div>
    </>
  );
}
