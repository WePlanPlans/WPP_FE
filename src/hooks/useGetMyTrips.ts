import { useQuery } from '@tanstack/react-query';
import { getMyTrips } from '@api/trips';

interface Trip {
  tripId: number;
  tripName: string;
  startDate: string;
  endDate: string;
  numberOfPeople: number;
  tripStatus: string;
  tripThumbnailUrl: string;
}

export const useGetMyTrips = (): { myTrips: Trip[] } => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMyTrips'],
    queryFn: () => getMyTrips(),
    staleTime: 60000,
  });

  const myTrips = data?.data.data;

  if (isLoading || isError) {
    return { myTrips: [] };
  }

  return { myTrips };
};
