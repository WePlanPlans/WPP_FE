import { RegionTypes, ToursCategoryProps } from '@/@types/tours.types';
import ToursCategoryItem from './ToursCategoryItem';
import { getPopularRegion } from '@api/region';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ToursCategory = ({
  selectedRegion,
  setSelectedRegion,
}: ToursCategoryProps) => {
  const regionsQuery = useQuery({
    queryKey: ['regions'],
    queryFn: () => getPopularRegion(),
  });

  if (regionsQuery.error) {
    console.log('error - 예외 처리');
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
  const regionsData = regionsQuery.data?.data.data.regions ?? [];
  const regions = [
    { name: '전체', areaCode: 0, subAreaCode: 0 },
    ...regionsData,
  ];

  return (
    <div className="no-scrollbar my-3 flex w-[100%] overflow-scroll overflow-y-hidden bg-white">
      <Swiper spaceBetween={8} slidesPerView={'auto'}>
        {regions.map((region: RegionTypes, index: number) => {
          return (
            <SwiperSlide key={index} className="w-[58px]">
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
