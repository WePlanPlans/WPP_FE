interface TripRequest {
  tripName: string;
  numberOfPeople: number;
  startDate: string;
  endDate: string;
  area: string;
  subarea: string;
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
