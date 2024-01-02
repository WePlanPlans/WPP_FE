import { useEffect, useState } from 'react';
import ToursItem from './ToursItem';
import { getTours } from '@api/tours';

interface TourType {
  id: number;
  title: string;
  liked: boolean;
  likedCount: number;
  ratingAverage: number;
  reviewCount: number;
  smallThumbnailUrl: string;
}

interface ToursListProps {
  selectedRegion: string;
}

const ToursList = ({ selectedRegion }: ToursListProps) => {
  const [tours, setTours] = useState<TourType[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await getTours(selectedRegion, 0, 10);
        setTours(res.data.data.content);
      } catch (error) {
        console.error('인기여행지 조회 실패:', error);
      }
    };

    fetchTours();
  }, [selectedRegion]);

  return (
    <div className="no-scrollbar grid grid-cols-2 gap-[15px] overflow-y-scroll">
      {tours.map((tour) => {
        return <ToursItem key={tour.id} tour={tour} />;
      })}
    </div>
  );
};

export default ToursList;
