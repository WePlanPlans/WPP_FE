import { Paths } from '@/@types/service';
import { Map, MapMarker, Polyline, useKakaoLoader } from 'react-kakao-maps-sdk';

const VITE_KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const TripMap = ({ paths }: { paths: Paths[] }) => {
  const firstPath = paths[0];
  const latitude = firstPath?.fromLatitude;
  const longitude = firstPath?.fromLongitude;

  const defaultPosition = { lat: Number(latitude), lng: Number(longitude) };

  const getCenterPosition = () => {
    if (paths.length === 0) {
      return defaultPosition;
    }

    let totalLat = 0;
    let totalLng = 0;

    paths.forEach((path) => {
      totalLat += Number(path.fromLatitude);
      totalLng += Number(path.fromLongitude);
    });

    return {
      lat: totalLat / paths.length,
      lng: totalLng / paths.length,
    };
  };

  const centerPosition = getCenterPosition();

  const [_] = useKakaoLoader({
    appkey: VITE_KAKAO_MAP_API_KEY,
  });

  const MapStyle = {
    width: '100%',
    height: '180px',
    marginTop: '15px',
    marginBottom: '15px',
    transition: 'height 0.3s ease-in-out',
  };

  // polylinePath를 생성하는 로직
  const polylinePath = paths.map((path) => ({
    lat: Number(path.fromLatitude),
    lng: Number(path.fromLongitude),
  }));

  // 마지막 경로의 toLatitude와 toLongitude 추가
  if (paths.length > 0) {
    const lastPath = paths[paths.length - 1];
    polylinePath.push({
      lat: Number(lastPath.toLatitude),
      lng: Number(lastPath.toLongitude),
    });
  }

  return (
    <div className="flex justify-center">
      <Map
        key={VITE_KAKAO_MAP_API_KEY}
        center={centerPosition}
        style={MapStyle}
        level={10}
        className="relative rounded-lg object-fill">
        {paths.map((path, index) => (
          <div key={index}>
            <MapMarker
              position={{
                lat: Number(path.fromLatitude),
                lng: Number(path.fromLongitude),
              }}
            />
            <MapMarker
              position={{
                lat: Number(path.toLatitude),
                lng: Number(path.toLongitude),
              }}
            />
            <Polyline
              path={polylinePath}
              strokeWeight={2}
              strokeColor={'black'}
              strokeOpacity={0.5}
              strokeStyle={'longdash'}
            />
          </div>
        ))}
      </Map>
    </div>
  );
};

export default TripMap;
