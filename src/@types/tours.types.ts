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
