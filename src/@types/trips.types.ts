interface TripRequest {
  tripName: string;
  numberOfPeople: number;
  startDate: string | null;
  endDate: string | null;
  area: string | null;
  subarea: string | null;
}

interface MyTripType {
  tripId: number;
  tripName: string;
  startDate: string;
  endDate: string;
  numberOfPeople: number;
  tripStatus: string;
  tripThumbnailUrl: string;
  area: string;
  subArea: string;
}
