import { Paths } from '@/@types/service';
import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, Polyline, useKakaoLoader } from 'react-kakao-maps-sdk';
import FirstMarker from '@/assets/images/FirstMarker.png';
import FirstSelectedMarker from '@/assets/images/FirstSelectedMarker.png';
import SecondMarker from '@/assets/images/SecondMarker.png';
import ThirdMarker from '@/assets/images/ThirdMarker.png';
import FourthMarker from '@/assets/images/FourthMarker.png';
import FifthMarker from '@/assets/images/FifthMarker.png';
import SecondSelectedMarker from '@/assets/images/SecondSelectedMarker.png';
import ThirdSelectedMarker from '@/assets/images/ThirdSelectedMarker.png';
import FourthSelectedMarker from '@/assets/images/FourthSelectedMarker.png';
import FifthSelectedMarker from '@/assets/images/FifthSelectedMarker.png';

const VITE_KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const TripMap = ({ paths }: { paths: Paths[] }) => {
  const firstPath = paths[0];
  const latitude = firstPath?.fromLatitude;
  const longitude = firstPath?.fromLongitude;

  // Kakao Maps SDK 로드 상태
  const [_] = useKakaoLoader({
    appkey: VITE_KAKAO_MAP_API_KEY,
  });

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

  const MapStyle = {
    width: '100%',
    height: '180px',
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

  const mapRef = useRef<kakao.maps.Map | null>(null);

  // 지도 범위 재설정 함수
  const setBounds = () => {
    if (mapRef.current) {
      const bounds = new kakao.maps.LatLngBounds();
      paths.forEach((path) => {
        bounds.extend(
          new kakao.maps.LatLng(
            Number(path.fromLatitude),
            Number(path.fromLongitude),
          ),
        );
        bounds.extend(
          new kakao.maps.LatLng(
            Number(path.toLatitude),
            Number(path.toLongitude),
          ),
        );
      });
      mapRef.current.setBounds(bounds);
    }
  };

  useEffect(() => {
    setBounds();
  }, [paths]);

  // 선택된 마커의 인덱스를 추적하기 위한 상태
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  // 마커를 클릭할 때 호출되는 함수
  const handleMarkerClick = (index: number) => {
    setSelectedMarker(index);
  };

  // 각 마커에 대한 이미지를 렌더링하는 함수
  const renderMarkerImage = (index: number, isSelected: boolean) => {
    let svgComponent;
    switch (index % 5) {
      case 0:
        svgComponent = isSelected ? FirstSelectedMarker : FirstMarker;
        break;
      case 1:
        svgComponent = isSelected ? SecondSelectedMarker : SecondMarker;
        break;
      case 2:
        svgComponent = isSelected ? ThirdSelectedMarker : ThirdMarker;
        break;
      case 3:
        svgComponent = isSelected ? FourthSelectedMarker : FourthMarker;
        break;
      case 4:
        svgComponent = isSelected ? FifthSelectedMarker : FifthMarker;
        break;
      default:
        // 기본 마커
        return 'default_marker_image_url';
    }
    return svgComponent;
  };

  return (
    <div className="mx-[-20px] flex flex-col justify-center">
      <Map
        key={VITE_KAKAO_MAP_API_KEY}
        center={centerPosition}
        style={MapStyle}
        level={10}
        className="relative object-fill"
        ref={mapRef}>
        {paths.map((path, index) => (
          <div key={index}>
            <MapMarker
              position={{
                lat: Number(path.fromLatitude),
                lng: Number(path.fromLongitude),
              }}
              onClick={() => handleMarkerClick(index)}
              image={{
                src: renderMarkerImage(index, selectedMarker === index),
                size: {
                  width: 33,
                  height: 33,
                },
              }}
            />
            <MapMarker
              position={{
                lat: Number(path.toLatitude),
                lng: Number(path.toLongitude),
              }}
              onClick={() => handleMarkerClick(index)}
              image={{
                src: renderMarkerImage(index, selectedMarker === index),
                size: {
                  width: 33,
                  height: 33,
                },
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
