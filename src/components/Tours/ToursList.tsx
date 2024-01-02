import { TourType, ToursListProps } from '@/@types/tours.types';
import ToursItem from './ToursItem';
import { getTours } from '@api/tours';
import { useQuery } from '@tanstack/react-query';

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
