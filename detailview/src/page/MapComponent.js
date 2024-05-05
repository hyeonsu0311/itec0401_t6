import React, { useEffect } from 'react';

function MapComponent({ latitude, longitude, address }) {
  useEffect(() => {
    // 카카오 지도 API를 이용 - 지도를 생성
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container, options);

    // 마커 표시
    const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    console.log('Address:', address);

    
  }, [latitude, longitude]);

  return (
    <div>
      <h2>위치 정보</h2>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      <p>*주소 : {address}</p>
    </div>
  );
}

export default MapComponent;
