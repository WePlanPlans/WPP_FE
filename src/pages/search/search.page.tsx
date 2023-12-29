import { RegionSelect } from '@components/search/RegionSelect';
import { SearchInput } from '@components/search/SearchInput';

export const Search = () => {
  const handleRegionChange = (selectedRegion: string | number) => {
    console.log('선택한 지역:', selectedRegion);
  };

  return (
    <>
      <SearchInput />
      <RegionSelect onRegionChange={handleRegionChange} />
    </>
  );
};
