import * as React from 'react';
import styles from './PlaceList.module.css';
import PlaceItem from './PlaceItem';
import { useSelector } from 'react-redux';

const PlaceList = () => {
    const { places, status, error } = useSelector((state) => state.places);

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Error: {error}</p>

    return (
      <div className={styles.container}>
        {places.map(place => (
            place.image !== '' && <PlaceItem key={place.id} place={place}/>
        ))}
      </div>
    );
  };

export default PlaceList;