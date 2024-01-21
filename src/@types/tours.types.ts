export type TourKeywordInfo = {
  keywordId: number;
  content: string;
  type: string;
  keywordCount: number;
};

export interface RegionTypes {
  areaCode?: number;
  subAreaCode?: number;
  name: string;
}

export interface ToursCategoryItemProps extends RegionTypes {
  isSelected: boolean;
  onSelect: (name: string) => void;
}

export interface ToursListProps {
  selectedRegion: string;
}

export interface ToursCategoryProps extends ToursListProps {
  setSelectedRegion: (region: string) => void;
}

export interface TourType {
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

export interface LikedListType {
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
