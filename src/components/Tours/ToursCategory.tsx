import ToursCategoryItem from './ToursCategoryItem';
import { useEffect, useState } from 'react';
import { getPopularRegion } from '@api/region';

interface RegionTypes {
  areaCode: number;
  subAreaCode: number;
  name: string;
}

interface ToursCategoryProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const ToursCategory = ({
  selectedRegion,
  setSelectedRegion,
}: ToursCategoryProps) => {
  const [regions, setRegions] = useState<RegionTypes[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await getPopularRegion();
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
