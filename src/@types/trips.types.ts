interface TripRequest {
  tripName: string;
  numberOfPeople: number;
  startDate: string | null;
  endDate: string | null;
  area?: string | null;
  subarea?: string | null;
}

interface MyTripType {
  tripId: string;
  tripName: string;
  startDate: string;
  endDate: string;
  numberOfPeople: number;
  numberOfTripMember: number;
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
  title: string;
}

interface ThumbsProps {
  tripId: string;
  tourId: number;
  prefer: boolean;
  notPrefer: boolean;
}

interface AuthorityType {
  status: number;
  message: string;
  data: {
    memberId: number;
    tripAuthority: string;
    tripId: string;
  };
}
interface TripSurveySetMemberInfo {
  memberId: number;
  nickname: string;
  thumbnail: string;
}

interface TripMemeberInfo {
  nickname: string;
  profileImageUrl: string;
}
