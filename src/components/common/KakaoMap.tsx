// src/components/KakaoMap.tsx
import { useEffect, useRef } from 'react';
import useCurrentPosition from '@/hooks/useCurrentPosition';

interface IKakaoMapProps {
  width: string;
  height: string;
  onAddressChange: (addr: string) => void;
}

const KakaoMap = ({ width, height, onAddressChange }: IKakaoMapProps) => {
  const container = useRef<HTMLDivElement>(null);
  const currentPosition = useCurrentPosition();

  // 좌표 -> 주소 변환 함수
  const geoCoordToAddress = (coord: kakao.maps.LatLng) => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const address = result[0].address.address_name;
        onAddressChange(address);
      }
    });
  };

  useEffect(() => {
    if (container.current && currentPosition) {
      const latLng = new kakao.maps.LatLng(
        currentPosition.latitude,
        currentPosition.longitude
      );
      const options = {
        center: latLng,
        level: 3,
      };
      const map = new kakao.maps.Map(container.current, options);

      // 현재 위치에 마커를 표시하는 함수
      const displayCurrentLocationMarker = () => {
        const marker = new kakao.maps.Marker({ position: latLng });
        marker.setMap(map);
        map.setCenter(latLng);
      };

      displayCurrentLocationMarker();
      geoCoordToAddress(latLng);
    }
  }, [currentPosition]);

  return <div ref={container} style={{ width, height }} />;
};

export default KakaoMap;
