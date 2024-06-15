'use client'
import * as React from 'react';
import { useEffect } from 'react';
import PlaceList from '@/components/place/PlaceList';
import SelectBox from '@/components/place/SelectBox';
import Typography from '@mui/joy/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces } from '@/store/slices/placeSlice';
import styles from './PlaceTemplate.module.css';

const PlaceTemplate = () => {
    const dispatch = useDispatch();
    const selectedArea = useSelector(state => state.places.selectedArea);

    useEffect(() => {
        if (selectedArea) {
            dispatch(fetchPlaces(selectedArea));
        }
    }, [selectedArea, dispatch]);

    return (
        <div className={styles.placeTemplate}>
            <div className={styles.titleDiv}>
                <p className={styles.title}>여행지 탐색</p>
                <p className={styles.content}>공공데이터에 등록된 여행지 정보를 확인할 수 있습니다.</p>
            </div>
            <SelectBox/>
            <Typography
                color="neutral"
                level="h1"
                noWrap
                variant="plain" sx={{ margin: '20px'}}>
                {selectedArea.name} :
            </Typography>
            <PlaceList/>
        </div>
    )
};

export default PlaceTemplate;