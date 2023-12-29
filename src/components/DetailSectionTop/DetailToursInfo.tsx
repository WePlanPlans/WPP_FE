import { ReactComponent as HeartIcon } from '../../assets/images/Heart.svg';

export default function DetailToursInfo() {
  return (
    <>
      <div className="column mt-1 flex aspect-[3/2] h-[11.938rem] w-full items-start overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="tour-image"
          className="h-full w-full"
        />
      </div>
      <div className="mt-1 flex w-full items-center justify-between py-2">
        <h1 className="text-2xl font-bold">강릉 세인트존스 호텔</h1>
        <div className="top-75 h-[24px] w-[24px] cursor-pointer">
          <HeartIcon fill="#D7D7D7" />
        </div>
      </div>
    </>
  );
}
