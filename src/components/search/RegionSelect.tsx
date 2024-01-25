import { AREA_CODE } from '@/constants';
import { ToggleValue } from '@components/common/toggleGroup/ToggleValue';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const RegionSelect = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedRegion, setSelectedRegion] = useState('');
  // 지역값 쿼리스트링으로 저장
  const onRegionSelect = (key: string) => {
    const queryParams = new URLSearchParams(location.search);
    const value = AREA_CODE[key as keyof typeof AREA_CODE];

    if (key === selectedRegion) {
      queryParams.delete('region');
      setSelectedRegion('');
    } else {
      queryParams.set('region', value);
      setSelectedRegion(key);
    }

    navigate(
      {
        pathname: location.pathname,
        search: queryParams.toString(),
      },
      { replace: true },
    );
  };

  return (
    <ToggleValue values={Object.keys(AREA_CODE)} onToggle={onRegionSelect} />
  );
};
