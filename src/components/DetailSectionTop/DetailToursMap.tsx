import { ReactComponent as MapIcon } from '@assets/images/Map.svg';
import { ReactComponent as CheckIcon } from '@assets/images/Check.svg';
import { ReactComponent as PhoneIcon } from '@assets/images/Phone.svg';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';

interface DetailToursMapProps {
  mapData: tourDetail;
}

export default function DetailToursMap({ mapData }: DetailToursMapProps) {
  const { fullAddress, longitude, latitude, tel } = mapData;
  const [isMapVisible, setIsMapVisible] = useState<boolean>(false);

  const MapStyle = {
    width: '100%',
    height: isMapVisible ? 0 : '180px',
    marginTop: isMapVisible ? '15px' : '15px',
    marginBottom: isMapVisible ? '15px' : '15px',
    transition: 'height 0.3s ease-in-out',
  };

  const closeMap = () => {
    setIsMapVisible((prev) => !prev);
  };

  return (
    <div className="mt-4 w-full">
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex">
          <MapIcon />
          <span className="ml-1 text-sm">{fullAddress}</span>
        </div>
        <CheckIcon className="cursor-pointer" onClick={closeMap} />
      </div>
      <div className="flex justify-center">
        <Map
          center={{ lat: Number(latitude), lng: Number(longitude) }}
          style={MapStyle}
          level={4}
          className="relative rounded-lg object-fill">
          <MapMarker
            position={{
              lat: Number(latitude),
              lng: Number(longitude),
            }}
            image={{
              src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
              size: {
                width: 45,
                height: 50,
              },
              options: {
                offset: {
                  x: 18,
                  y: 50,
                },
              },
            }}></MapMarker>
        </Map>
      </div>
      <div className="flex gap-1">
        <PhoneIcon />
        <span className="text-sm">{tel}</span>
      </div>
    </div>
  );
}
