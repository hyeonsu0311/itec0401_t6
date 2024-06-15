'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import PlaceItem from '@/components/place/PlaceItem';
import { useSelector } from 'react-redux';
import styles from './PlaceList.module.css';

const PlaceList = () => {
    const { places, status, error } = useSelector((state) => state.places);

    if (status === 'loading') return (
      <Box className={styles.loadingContainer}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>Loading...</Typography>
      </Box>
    );
    
    if (status === 'failed') return (
      <Box className={styles.errorContainer}>
        <Typography variant="body1" color="error">Error: {error}</Typography>
      </Box>
    );

    return (
      <Box className={styles.container}>
        {places.map(place => (
            place.image !== '' && <PlaceItem key={place.id} place={place} />
        ))}
      </Box>
    );
};

export default PlaceList;
