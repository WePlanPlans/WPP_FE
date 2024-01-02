import { getPopularTours } from '@api/region';
import ToursCategoryItem from './ToursCategoryItem';
import { useEffect, useState } from 'react';

interface RegionTypes {
  areaCode: number;
  subAreaCode: number;
  name: string;
}
const ToursCategory = () => {
  const [regions, setRegions] = useState<RegionTypes[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('전체');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await getPopularTours();
        const allRegions = [
          { name: '전체', areaCode: 0, subAreaCode: 0 },
          ...res.data.data.regions,
        ];

        setRegions(allRegions);
      } catch (error) {
        console.error('지역 카테고리 조회 실패:', error);
      }
    };

    fetchTours();
  }, []);

  const handleSelectRegion = (name: string) => {
    setSelectedRegion(name);
  };

  return (
    <div className="no-scrollbar my-3 flex w-[100%] overflow-scroll overflow-y-hidden bg-white">
      {regions.map((region, index) => {
        return (
          <ToursCategoryItem
            key={index}
            name={region.name}
            isSelected={region.name === selectedRegion}
            onSelect={handleSelectRegion}
          />
        );
      })}
    </div>
  );
};

export default ToursCategory;
