import { useEffect } from 'react';

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById('map') as HTMLElement;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);
  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
}

export default KakaoMap;
