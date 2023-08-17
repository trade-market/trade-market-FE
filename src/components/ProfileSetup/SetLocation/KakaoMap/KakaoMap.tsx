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
import { useLocation } from 'react-router-dom';

interface LocationState {
  address: string;
}

function KakaoMap() {
  const container = useRef<HTMLDivElement>(null);
  const currentPosition = useCurrentPosition();
  const dispatch = useDispatch();
  const location = useLocation();
  const locationState = location.state as LocationState | undefined;

  // 맵(지도) 생성
  const createMap = (coord: kakao.maps.LatLng) => {
    const options = {
      center: coord,
      level: 2,
    };
    const map = new kakao.maps.Map(container.current as HTMLElement, options);
    return map;
  };

  // 지도에 마커 표시, 중심 좌표로 이동
  const displayMarker = (map: kakao.maps.Map, coord: kakao.maps.LatLng) => {
    const marker = new kakao.maps.Marker({ position: coord });
    marker.setMap(map);
    map.setCenter(coord);
  };

  // 좌표 -> 주소 획득
  const geoCoordToAddress = (coord: kakao.maps.LatLng) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const longitude = coord.getLng();
    const latitude = coord.getLat();
    geocoder.coord2Address(longitude, latitude, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const { region_1depth_name, region_2depth_name, region_3depth_name } =
          result[0].address;
        dispatch(
          setProfileAddress(
            `${region_1depth_name} ${region_2depth_name} ${region_3depth_name}`
          )
        );
        dispatch(setProfileCoordinates({ longitude, latitude }));
      }
    });
  };

  // 현재 위치 기반으로 지도 표시
  const displayMapBasedOnCurrentPosition = () => {
    if (container.current && currentPosition) {
      const latLng = new kakao.maps.LatLng(
        currentPosition.latitude,
        currentPosition.longitude
      );
      const map = createMap(latLng);
      displayMarker(map, latLng);
      geoCoordToAddress(latLng);
    }
  };

  // 주소 -> 좌표 획득
  const getCoordinatesFromAddress = (
    address: string
  ): Promise<kakao.maps.LatLng | null> => {
    return new Promise((resolve) => {
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const {
            x,
            y,
            region_1depth_name,
            region_2depth_name,
            region_3depth_name,
          } = result[0].address;
          const latitude = Number(y);
          const longitude = Number(x);
          const coords = new kakao.maps.LatLng(latitude, longitude);
          dispatch(
            setProfileAddress(
              `${region_1depth_name} ${region_2depth_name} ${region_3depth_name}`
            )
          );
          dispatch(setProfileCoordinates({ latitude, longitude }));
          resolve(coords);
        } else {
          resolve(null);
        }
      });
    });
  };

  // 사용자 입력 주소 기반으로 지도 표시
  const displayMapBasedOnAddress = async () => {
    if (!locationState?.address) {
      return;
    }

    const latLng = await getCoordinatesFromAddress(locationState.address);
    if (!latLng) {
      console.error(
        'Failed to getLatLng, Function getCoordinatesFromAddress error'
      );
      return;
    }

    const map = createMap(latLng);
    displayMarker(map, latLng);
  };

  useEffect(() => {
    if (locationState?.address) {
      displayMapBasedOnAddress();
    } else {
      displayMapBasedOnCurrentPosition();
    }
  }, [displayMapBasedOnCurrentPosition, displayMapBasedOnAddress]);

  return (
    <K.Container ref={container}>
      <SetCurrentLocationBtn onClick={displayMapBasedOnCurrentPosition} />
      <CurrentLocation />
    </K.Container>
  );
}

export default KakaoMap;
