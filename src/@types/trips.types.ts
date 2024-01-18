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

interface ourTripType {
  tripLikedItemId: number;
  tourItemId: number;
  contentTypeId: number;
  ratingAverage: number;
  reviewCount: number;
  smallThumbnailUrl: string;
  tourAddress: string;
  prefer: boolean;
  notPrefer: boolean;
  preferTotalCount: number;
  notPreferTotalCount: number;
}

interface ThumbsProps {
  tripId: number;
  tourId: number;
  prefer: boolean;
  notPrefer: boolean;
}
