import { ReactComponent as MapIcon } from '../../assets/images/Map.svg';
import { ReactComponent as CheckIcon } from '../../assets/images/Check.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images/Phone.svg';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface MapProps {
  mapData: tourDetail;
}

export default function DetailToursMap({ mapData }: MapProps) {
  const { fullAddress, longitude, latitude, tel } = mapData;

  return (
    <div className="mt-4 w-full">
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex">
          <MapIcon />
          <span className="ml-1 text-sm">{fullAddress}</span>
        </div>
        <CheckIcon className="cursor-pointer" />
      </div>
      <Map
        center={{ lat: Number(latitude), lng: Number(longitude) }}
        style={{ width: '335px', height: '150px' }}
        level={4}
        className="relative mb-4 mt-4 rounded-lg object-fill">
        <MapMarker
          position={{
            lat: Number(latitude),
            lng: Number(longitude),
          }}></MapMarker>
      </Map>
      <div className="flex gap-1">
        <PhoneIcon />
        <span className="text-sm">{tel}</span>
      </div>
    </div>
  );
}
