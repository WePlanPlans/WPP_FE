import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useKakaoLoader } from 'react-kakao-maps-sdk';
import { PhoneIcon, MapIcon } from '@components/common/icons/Icons';

const VITE_KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

interface DetailToursMapProps {
  mapData: tourDetail;
}

export default function DetailToursMap({ mapData }: DetailToursMapProps) {
  const { fullAddress, longitude, latitude, tel } = mapData;

  const [_] = useKakaoLoader({
    appkey: VITE_KAKAO_MAP_API_KEY,
  });

  const MapStyle = {
    width: '100%',
    height: '180px',
    marginTop: '5px',
    marginBottom: '15px',
  };

  return (
    <div className="mt-4 w-full">
      <div className="flex justify-center">
        <Map
          key={VITE_KAKAO_MAP_API_KEY}
          center={{ lat: Number(latitude), lng: Number(longitude) }}
          style={MapStyle}
          level={4}
          className="relative rounded-lg object-fill">
          <MapMarker
            position={{
              lat: Number(latitude),
              lng: Number(longitude),
            }}></MapMarker>
        </Map>
      </div>

      <div className="flex-col items-start">
        <div className="mb-[10px] ml-[-2.5px] flex items-center">
          <MapIcon size={24} fill="#888888" color="none" />
          <p className="max-w-[325px] flex-shrink-0 flex-grow-0 overflow-hidden truncate text-left text-sm text-[#1e1e1e]">
            {fullAddress}
          </p>
        </div>
        <div className="relative flex w-full items-center justify-start gap-[5px]">
          <PhoneIcon size={17} />
          <div className="relative flex min-w-[310px] flex-shrink-0 flex-grow-0 items-center justify-between">
            <p className="flex-shrink-0 flex-grow-0 text-left text-sm text-[#1e1e1e]">
              {tel ? tel : '전화번호가 없어요'}
            </p>
            <div className="h-4 w-4 flex-shrink-0 flex-grow-0">
              <div className="absolute left-[292.5px] top-0 h-4 w-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
