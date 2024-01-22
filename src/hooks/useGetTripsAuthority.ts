import { useQuery } from '@tanstack/react-query';
import { getTripsAuthority } from '@api/trips';

import { useParams } from 'react-router-dom';

type useGetTripsAuthorityReturn = {
  tripAuthority: string | null;
  memberId: number | null;
  tripId: string | null;
};

export const useGetTripsAuthority = (): useGetTripsAuthorityReturn => {
  const { id } = useParams();
  const defaultReturn = {
    tripAuthority: null,
    memberId: null,
    tripId: null,
  };

  if (!id) {
    return defaultReturn;
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getTripsAuthority', id],
    queryFn: () => getTripsAuthority(id),
    enabled: !!id,
  });

  const tripAuthority = data?.data.data.tripAuthority;
  const memberId = data?.data.data.memberId;
  const tripId = data?.data.data.TripId;

  if (isLoading || isError) {
    return defaultReturn;
  }

  return { tripAuthority, memberId, tripId };
};
