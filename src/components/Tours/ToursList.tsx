import ToursItem from './ToursItem';
import { getTours } from '@api/tours';
import { useQuery } from '@tanstack/react-query';

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
  const toursQuery = useQuery({
    queryKey: ['tours', selectedRegion],
    queryFn: () => getTours(selectedRegion, 0, 30),
  });

  if (toursQuery.error) {
    console.log('error - 예외 처리');
  }

  return (
    <div className="no-scrollbar grid grid-cols-2 gap-[15px] overflow-y-scroll">
      {toursQuery.data?.data.data.content.map((tour: TourType) => {
        return <ToursItem key={tour.id} tour={tour} />;
      })}
    </div>
  );
};

export default ToursList;
