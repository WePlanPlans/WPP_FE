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
const ToursList = () => {
  const [tours, setTours] = useState<TourType[]>([]);
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await getTours('서울', 0, 10);
        setTours(res.data.data.content);
      } catch (error) {
        console.error('여행지 조회 실패:', error);
      }
    };

    fetchTours();
  }, []);
  return (
    <div className="no-scrollbar grid grid-cols-2 gap-[15px] overflow-y-scroll">
      {tours.map((tour) => {
        return <ToursItem key={tour.id} tour={tour} />;
      })}
    </div>
  );
};

export default ToursList;
