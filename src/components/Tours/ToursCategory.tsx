import { RegionTypes, ToursCategoryProps } from '@/@types/tours.types';
import ToursCategoryItem from './ToursCategoryItem';
import { getPopularRegion } from '@api/region';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ToursCategoryItemSkeleton from './ToursCategoryItemSkeleton';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';

const ToursCategory = ({
  selectedRegion,
  setSelectedRegion,
}: ToursCategoryProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['regions'],
    queryFn: () => getPopularRegion(),
  });

  const [showSkeleton, setShowSkeleton] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShowSkeleton(true);
    } else {
      const timer = setTimeout(() => setShowSkeleton(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (error) {
    console.error('error');
  }

  const handleSelectRegion = (name: string) => {
    setSelectedRegion(name);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // '전체' 항목 추가
  const regionsData = data?.data.data.regions ?? [];
  const regions = [
    { name: '전체', areaCode: uuidv4(), subAreaCode: 0 },
    ...regionsData,
  ];

  if (showSkeleton) {
    return (
      <div className="no-scrollbar my-3 flex w-[100%] overflow-scroll overflow-y-hidden bg-white">
        <Swiper spaceBetween={8} slidesPerView={'auto'}>
          {Array.from({ length: 10 }, (_, index) => (
            <SwiperSlide key={index} className="w-[62px]">
              <ToursCategoryItemSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div className="no-scrollbar my-3 flex w-[100%] overflow-scroll overflow-y-hidden bg-white">
      <Swiper spaceBetween={8} slidesPerView={'auto'}>
        {regions.map((region: RegionTypes) => {
          return (
            <SwiperSlide key={uuidv4()} className="w-[58px]">
              <ToursCategoryItem
                name={region.name}
                isSelected={region.name === selectedRegion}
                onSelect={handleSelectRegion}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ToursCategory;
