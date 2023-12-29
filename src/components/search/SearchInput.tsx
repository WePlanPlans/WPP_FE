export const SearchInput = () => {
  return (
    <>
      <div className="relative flex items-center ">
        <button className=" backIcon bg-gray5 mr-2.5 h-[24px] w-[24px]" />
        <div className="absolute left-[52px] top-1/2 h-[12px] w-[12px] -translate-y-1/2 transform bg-black" />
        <input
          className="bg-gray1 body1 ml-2.5 h-[40px] w-full items-center rounded-lg pl-[32px] pr-2.5 focus:outline-none"
          onClick={() => {}}
          placeholder="어디로 떠나세요?"></input>
      </div>
    </>
  );
};
