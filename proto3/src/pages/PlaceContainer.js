import React, { useState } from 'react';
import Place from '../components/Place';
import SelectComponent from '../components/SelectComponent'; 
import GoogleMapComponent from '../components/GooglemapComponent';

const countriesWithCities = {
  '한국': ['서울', '부산'],
  '일본': ['도쿄', '오사카'],
  '프랑스': ['파리', '니스']
};

const placesByCity = {
  '서울': [{ id: '1', name: '경복궁', category: '관광지', latitude: 37.579617, longitude: 126.977041, 
  content: `서울특별시 종로구 세종로에 있는 조선전기에 창건되어 정궁으로 이용된 궁궐. 정궁. 사적.`}],
  '도쿄': [{ id: '2', name: '도쿄 타워', category: '관광지', latitude: 35.658581, longitude: 139.745433, content: `오랫동안 사람들의 가슴 속에 소박한 빛을 밝혀 준 영원한 도쿄의 심볼` }],
  '파리': [{ id: '3', name: '에펠탑', category: '관광지', latitude: 48.858370, longitude: 2.294481, content: `프랑스와 파리의 과거와 현재를 상징하는 에펠탑` }],
};

const PlaceContainer = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);
  const [places, setPlaces] = useState([]);
  const [selectedPlaceDetail, setSelectedPlaceDetail] = useState({ description: '', latitude: 0, longitude: 0 });

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setCities(countriesWithCities[country] || []);
    setSelectedCity('');
    setPlaces([]);
    setSelectedPlaceDetail(null);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setPlaces(placesByCity[city] || []);
    setSelectedPlaceDetail(null);
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlaceDetail({
      ...place,
      description: place.content
    });
  };

  const countryOptions = Object.keys(countriesWithCities).map(country => ({
    value: country, 
    label: country
  }));

  const cityOptions = cities.map(city => ({
    value: city,
    label: city
  }));

  return (
    <div>
      <h1>여행지 정보</h1>
      <SelectComponent
        label="국가"
        options={countryOptions}
        value={selectedCountry}
        onChange={handleSelectCountry}
      />
      {cities.length > 0 && (
        <SelectComponent
          label="도시"
          options={cityOptions}
          value={selectedCity}
          onChange={handleSelectCity}
        />
      )}
      {places.length > 0 && (
        <Place places={places} onSelect={handlePlaceSelect} />
      )}
      {selectedPlaceDetail && 
        <>
        <div>{selectedPlaceDetail.description}</div>
        <GoogleMapComponent place={selectedPlaceDetail} />
        </>}
    </div>
  );
};

export default PlaceContainer;
