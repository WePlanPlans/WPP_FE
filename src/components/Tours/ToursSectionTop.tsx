import { useState } from 'react';
import ToursCategory from './ToursCategory';
import ToursList from './ToursList';

const ToursSectionTop = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('전체');

  return (
    <div className="mt-3">
      <div className="sticky top-0 z-[105] bg-white py-0.5">
        <h1 className="title2 pt-3">지금 인기여행지</h1>
        <ToursCategory
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      <ToursList selectedRegion={selectedRegion} />
    </div>
  );
};

export default ToursSectionTop;
