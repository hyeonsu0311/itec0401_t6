import React, { useEffect } from 'react';

function MapComponent({ latitude, longitude, address }) {
  useEffect(() => {
    const loadKakaoMapScript = () => {
      return new Promise((resolve, reject) => {
        if (window.kakao && window.kakao.maps) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=28c2db66d07b61a974588b522820c7ac&autoload=false";
        script.async = true;
        script.onload = () => {
          console.log('Kakao Maps script loaded successfully');
          resolve();
        };
        script.onerror = (error) => {
          console.error('Failed to load the script', error);
          reject(new Error("Failed to load the script"));
        };
        document.head.appendChild(script);
      });
    };

    const initMap = () => {
      window.kakao.maps.load(() => {
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
      });
    };

    loadKakaoMapScript().then(() => {
      initMap();
    }).catch((error) => {
      console.error('Error loading Kakao Maps script:', error);
    });
  }, [latitude, longitude, address]);

  return (
    <div>
      <h2>위치 정보</h2>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      <p>*주소 : {address}</p>
    </div>
  );
}

export default MapComponent;