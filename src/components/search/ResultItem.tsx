export const ResultItem = (result: any) => {
  return (
    <div className="flex h-[52px] w-full py-1.5">
      <div className="imgWrap mr-2.5 overflow-hidden rounded-lg">
        <img
          className="h-10 w-10 object-cover"
          src={result.smallThumbnailUrl}
          alt={result.title}
        />
      </div>
      <div className="textWrap flex flex-col justify-between py-0.5">
        <div className="name body3">{result.title}</div>
        <span className="address body6 text-gray4">주소</span>
      </div>
    </div>
  );
};
