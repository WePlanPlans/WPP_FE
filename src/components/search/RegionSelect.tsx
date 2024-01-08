import { AREA_CODE } from '@/constants';
import { ToggleValue } from '@components/common/toggleGroup/ToggleValue';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const RegionSelect = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedRegion, setSelectedRegion] = useState('');
  // 지역값 쿼리스트링으로 저장
  const onRegionSelect = (value: string) => {
    const queryParams = new URLSearchParams(location.search);

    if (value === selectedRegion) {
      queryParams.delete('region');
      setSelectedRegion('');
    } else {
      queryParams.set('region', value);
      setSelectedRegion(value);
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
    <ToggleValue values={Object.values(AREA_CODE)} onToggle={onRegionSelect} />
  );
};
