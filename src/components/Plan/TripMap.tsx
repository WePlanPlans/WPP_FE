import { Paths } from '@/@types/service';
import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, Polyline, useKakaoLoader } from 'react-kakao-maps-sdk';
import { getColor } from '@utils/getColor';

const VITE_KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

const TripMap = ({ paths }: { paths: Paths[] }) => {
  const DEFAULT_LATITUDE = 36.34;
  const DEFAULT_LONGITUDE = 127.77;

  const firstPath = paths[0];
  const latitude = firstPath ? firstPath.fromLatitude : DEFAULT_LATITUDE;
  const longitude = firstPath ? firstPath.fromLongitude : DEFAULT_LONGITUDE;

  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [maplevel, setMapLevel] = useState(4);

  const defaultPosition = { lat: Number(latitude), lng: Number(longitude) };

  const [_] = useKakaoLoader({
    appkey: VITE_KAKAO_MAP_API_KEY,
  });

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
    if (paths.length > 0) {
      setTimeout(() => {
        setBounds();
      }, 100);
    } else {
      setMapLevel(15);
    }
  }, [paths]);

  // 마커를 클릭할 때 호출되는 함수
  const handleMarkerClick = (index: number) => {
    setSelectedMarker(index);
  };

  // SVG 문자열을 Data URI로 변환하는 함수
  const getSequenceIconUrl = (number: number) => {
    let svgString;
    let width, height;

    if (selectedMarker === number + 1) {
      width = 32;
      height = 39;
      svgString = encodeURIComponent(`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="49"
        viewBox="0 0 41 49"
        fill="none">
        <g filter="url(#filter0_d_2972_16425)">
          <path
            d="M20.2773 40.1372C28.2773 32.2684 36.2773 25.2224 36.2773 16.5307C36.2773 7.83898 29.1139 0.792969 20.2773 0.792969C11.4408 0.792969 4.27734 7.83898 4.27734 16.5307C4.27734 25.2224 12.2773 32.2684 20.2773 40.1372Z"
            fill="${getColor(number)}"
          />
          <path
            d="M32.5203 16.6923C32.5203 23.4539 27.0389 28.9353 20.2772 28.9353C13.5156 28.9353 8.03418 23.4539 8.03418 16.6923C8.03418 9.93062 13.5156 4.44922 20.2772 4.44922C27.0389 4.44922 32.5203 9.93062 32.5203 16.6923Z"
            fill="white"
          />
          <text
            x="17px"
            y="23px"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="15"
            fill="${getColor(number)}"
            font-weight="900">
            ${number}
          </text>
        </g>
        <defs>
          <filter
            id="filter0_d_2972_16425"
            x="0.277344"
            y="0.792969"
            width="40"
            height="47.3438"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2972_16425"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2972_16425"
              result="shape"
            />
          </filter>
        </defs>
      </svg>`);
    } else {
      width = 24;
      height = 24;
      svgString = encodeURIComponent(`
        <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10.5" cy="10.5" r="10" fill="${getColor(number)}" />
          <text x="10.5" y="15" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${number}</text>
        </svg>
      `);
    }

    return {
      src: `data:image/svg+xml;charset=UTF-8,${svgString}`,
      size: { width, height },
    };
  };

  return (
    <div className="mx-[-20px] flex flex-col justify-center">
      <Map
        key={VITE_KAKAO_MAP_API_KEY}
        center={centerPosition}
        style={MapStyle}
        level={maplevel}
        className="relative object-fill"
        ref={mapRef}>
        {paths.length !== 0 &&
          paths.map((path, index) => (
            <div key={path.toSeqNum}>
              <MapMarker
                position={{
                  lat: Number(path.fromLatitude),
                  lng: Number(path.fromLongitude),
                }}
                onClick={() => handleMarkerClick(path.toSeqNum)}
                image={getSequenceIconUrl(path.toSeqNum - 1)}
              />
              {/* 마지막 항목인 경우, 목적지 위치에 마커 추가 */}
              {index === paths.length - 1 && (
                <MapMarker
                  position={{
                    lat: Number(path.toLatitude),
                    lng: Number(path.toLongitude),
                  }}
                  onClick={() => handleMarkerClick(path.toSeqNum + 1)}
                  image={getSequenceIconUrl(path.toSeqNum)}
                />
              )}
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
