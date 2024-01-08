const ToursItemSkeleton = () => {
  return (
    <div className="flex-col">
      <div className="relative">
        <div className="rounded-1 h-[134px] max-h-[134px] w-[178px] animate-pulse rounded-[16px] bg-gray-300"></div>
      </div>
      <p className="headline1 mt-2 h-6 animate-pulse rounded bg-gray-300"></p>
      <div className="caption1 ml-[2px] mt-2 flex space-x-2">
        <div className="h-4 w-1/3 animate-pulse rounded bg-gray-300"></div>
        <div className="h-4 w-1/4 animate-pulse rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default ToursItemSkeleton;
