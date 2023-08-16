import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setProfileAddress,
  setProfileCoordinates,
} from '@store/slices/profileAddressSlice';
import * as K from './KakaoMapStyles';
import useCurrentPosition from '@/hooks/useCurrentPosition';
import CurrentLocation from '@components/ProfileSetup/SetLocation/CurrentLocation/CurrentLocation';
import SetCurrentLocationBtn from '@components/ProfileSetup/SetLocation/SetCurrentLocationBtn';

function KakaoMap() {
  const container = useRef<HTMLDivElement>(null);
  const currentPosition = useCurrentPosition();
  const dispatch = useDispatch();

  // 좌표 -> 주소 변환 함수
  const geoCoordToAddress = (coord: kakao.maps.LatLng) => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const { region_1depth_name, region_2depth_name, region_3depth_name } =
          result[0].address;
        dispatch(
          setProfileAddress(
            `${region_1depth_name} ${region_2depth_name} ${region_3depth_name}`
          )
        );
        dispatch(
          setProfileCoordinates({
            latitude: coord.getLat(),
            longitude: coord.getLng(),
          })
        );
      }
    });
  };

  const initializeMap = () => {
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
  };

  useEffect(() => {
    initializeMap();
  }, [initializeMap]);

  return (
    <K.Container ref={container}>
      <SetCurrentLocationBtn onClick={initializeMap} />
      <CurrentLocation />
    </K.Container>
  );
}

export default KakaoMap;
