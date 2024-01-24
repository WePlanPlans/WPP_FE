interface tourDetail {
  id: number;
  contentTypeId: number;
  title: string;
  liked: boolean;
  fullAddress: string;
  zipcode: string;
  longitude: string;
  latitude: string;
  tel: string;
  originalThumbnailUrl: string;
}

interface LikeProps {
  liked: boolean;
  id: number;
}
