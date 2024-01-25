interface TourKeywordInfo {
  keywordId: number;
  content: string;
  type: string;
  keywordCount: number;
}

interface RegionTypes {
  areaCode?: number;
  subAreaCode?: number;
  name: string;
}

interface ToursCategoryItemProps extends RegionTypes {
  isSelected: boolean;
  onSelect: (name: string) => void;
}

interface ToursListProps {
  selectedRegion: string;
}

interface ToursCategoryProps extends ToursListProps {
  setSelectedRegion: (region: string) => void;
}

interface TourType {
  contentTypeId?: number;
  id: number;
  title: string;
  liked: boolean;
  likedCount: number;
  ratingAverage: number;
  reviewCount: number;
  smallThumbnailUrl: string;
  tourAddress?: string;
  longitude?: string;
  latitude?: string;
}

interface LikedListType {
  tripLikedItemId: number;
  tourItemId: number;
  contentTypeId: number;
  title: string;
  ratingAverage: number;
  reviewCount: number;
  smallThumbnailUrl: string;
  tourAddress: string;
  prefer: boolean;
  notPrefer: boolean;
  preferTotalCount: number;
  notPreferTotalCount: number;
}

interface ReviewInfoItemProps {
  reviewId: number;
  authorNickname: string;
  authorProfileImageUrl: string;
  rating: number;
  createdTime: string;
  content: string;
  keywords: Keyword[]; // keywordId, content, type
  commentCount: number;
  onClick?: () => void;
  tourItemId?: number;
  contentTypeId?: number;
  canTextOverflow: boolean;
  isAuthor?: boolean;
}

interface Keyword {
  keywordId: number;
  content: string;
  type?: string;
}
