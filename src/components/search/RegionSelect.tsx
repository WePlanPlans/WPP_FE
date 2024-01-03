import { AREA_CODE } from '@/constants';
import { RadioSelect } from '@components/common/radio/Radio';
import { useNavigate } from 'react-router-dom';

export const RegionSelect = ({}) => {
  const navigate = useNavigate();
  // 지역값 쿼리스트링으로 저장
  const onRegionSelect = (value: string) => {
    console.log('지역?', value);
    navigate(`?region=${encodeURIComponent(value)}`);
  };

  console.log('');
  return (
    <RadioSelect
      items={AREA_CODE}
      ariaLabel="지역선택"
      onSelectionChange={onRegionSelect}
      // gridCols={3}
    />
  );
};
