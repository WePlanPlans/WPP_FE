export const ResultItem = () => {
  return (
    <div className="flex h-[52px] w-full py-1.5">
      <div className="imgWrap mr-2.5 overflow-hidden rounded-lg">
        <img
          className="h-10 w-10 object-cover"
          src="https://source.unsplash.com/random"
          alt=""
        />
      </div>
      <div className="textWrap flex flex-col justify-between py-0.5">
        <div className="name body3">강릉 세인트존스 호텔</div>
        <span className="address body6 text-gray4">강원 강릉시 창해로 307</span>
      </div>
    </div>
  );
};
