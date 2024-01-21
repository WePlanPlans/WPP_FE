import { useQuery } from '@tanstack/react-query';
import { getTrips } from '@api/trips';
import { useParams } from 'react-router-dom';

type useGetTripsReturn = {
  tripName: string | null;
  startDate: string | null;
  endDate: string | null;
  numberOfPeople: number | null;
};

export const useGetTrips = (): useGetTripsReturn => {
  const { id } = useParams();

  const defaultReturn = {
    tripName: null,
    startDate: null,
    endDate: null,
    numberOfPeople: null,
  };

  if (!id) {
    return defaultReturn;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getTrips', id],
    queryFn: () => getTrips(id),
    enabled: !!id,
    staleTime: 60000,
  });

  const tripName = data?.data.data.tripName;
  const startDate = data?.data.data.startDate;
  const endDate = data?.data.data.endDate;
  const numberOfPeople = data?.data.data.numberOfPeople;

  if (isLoading || isError) {
    return defaultReturn;
  }

  return { tripName, startDate, endDate, numberOfPeople };
};
