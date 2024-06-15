import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Paper, Typography, Box } from '@mui/material';

const containerStyle = {
  width: '1oo%',
  height: '400px'
};



function MapComponent({ latitude, longitude, address }) {
  // useEffect(() => {
  //   const loadKakaoMapScript = () => {
  //     return new Promise((resolve, reject) => {
  //       if (window.kakao && window.kakao.maps) {
  //         resolve();
  //         return;
  //       }

  //       const script = document.createElement('script');
  //       script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=28c2db66d07b61a974588b522820c7ac&autoload=false";
  //       script.async = true;
  //       script.onload = () => {
  //         console.log('Kakao Maps script loaded successfully');
  //         resolve();
  //       };
  //       script.onerror = (error) => {
  //         console.error('Failed to load the script', error);
  //         reject(new Error("Failed to load the script"));
  //       };
  //       document.head.appendChild(script);
  //     });
  //   };
  //   const initMap = () => {
  //     window.kakao.maps.load(() => {
  //       const container = document.getElementById('map');
  //       const options = {
  //         center: new window.kakao.maps.LatLng(latitude, longitude),
  //         level: 3,
  //       };
  //       const map = new window.kakao.maps.Map(container, options);

  //       // 마커 표시
  //       const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
  //       const marker = new window.kakao.maps.Marker({
  //         position: markerPosition,
  //       });
  //       marker.setMap(map);

  //       console.log('Address:', address);
  //     });
  //   };

  //   loadKakaoMapScript().then(() => {
  //     initMap();
  //   }).catch((error) => {
  //     console.error('Error loading Kakao Maps script:', error);
  //   });
  // }, [latitude, longitude, address]);

  const center = {
    lat: latitude,
    lng: longitude
  };
  // console.log(latitude)
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          위치 정보
        </Typography>
        <Box>
          <Typography variant="body1" gutterBottom>
            주소: {address}
          </Typography>
          <Box style={{ width: '100%' }}>
            <LoadScript googleMapsApiKey="AIzaSyCkgLyJbe8g8vC53eV2u4ejqdI5mKGnWlg">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </Box>
        </Box>
      </Paper>
    </Container>
    // <div>
    //   <h2>위치 정보</h2>
    //   <div id="map" style={{ width: '100%', height: '400px' }}></div>
    //   <p>*주소 : {address}</p>
    // </div>
  );
}

export default MapComponent;