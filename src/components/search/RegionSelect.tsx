import { AREA_CODE } from '@/constants';
import { ToggleValue } from '@components/common/toggleGroup/ToggleValue';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegionSelect = ({}) => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('');
  // 지역값 쿼리스트링으로 저장
  const onRegionSelect = (value: string) => {
    if (value === selectedRegion) {
      navigate('?');
      setSelectedRegion('');
    } else {
      navigate(`?region=${encodeURIComponent(value)}`);
      setSelectedRegion(value);
    }
  };

  console.log('');
  return (
    <ToggleValue values={Object.values(AREA_CODE)} onToggle={onRegionSelect} />
  );
};
