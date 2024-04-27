import React from 'react';

const Place = ({ places, onSelect }) => {
  return (
    <div>
      <h2>목록</h2>
      <ul>
        {places.map((place) => (
          <li key={place.id} onClick={() => onSelect(place)} style={{ cursor: 'pointer' }}>
            {place.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Place;

