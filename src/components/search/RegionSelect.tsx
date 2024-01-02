import { AREA_CODE } from '@/constants';
import { RadioSelect } from '@components/common/radio/Radio';

interface RegionSelectProps {
  onRegionChange: (selectedRegion: string) => void;
}

export const RegionSelect: React.FC<RegionSelectProps> = ({
  onRegionChange,
}) => {
  return (
    <RadioSelect
      items={AREA_CODE}
      ariaLabel="지역선택"
      onSelectionChange={onRegionChange}
      // gridCols={3}
    />
  );
};
