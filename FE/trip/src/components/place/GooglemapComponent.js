import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '400px',
  height: '400px'
};

const GoogleMapComponent = ({ place }) => {
  if (!place || !place.latitude || !place.longitude) return null;

  const center = {
    lat: place.latitude,
    lng: place.longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDUPlNvI7bJQBpS1JsEiu8TmWJg8_9J7vI">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {/* 마커를 표시 */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
