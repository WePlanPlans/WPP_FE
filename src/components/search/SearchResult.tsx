import { ResultCategory } from './ResultCategory';
interface SearchResultProps {
  selectedRegion: string;
}

export const SearchResult = ({ selectedRegion }: SearchResultProps) => {
  return (
    <>
      <div className="tabs">전체 숙소 식당 관광지</div>
      <div>{selectedRegion}</div>
      <ResultCategory />
      <ResultCategory />
    </>
  );
};
