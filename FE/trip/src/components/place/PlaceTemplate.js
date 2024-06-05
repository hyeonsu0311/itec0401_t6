'use client'
import * as React from 'react';
import { useEffect } from 'react';
import PlaceList from '@/components/place/PlaceList';
import SelectBox from '@/components/place/SelectBox';
import Typography from '@mui/joy/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces } from '@/store/slices/placeSlice';

const PlaceTemplate = () => {
    const dispatch = useDispatch();
    const selectedArea = useSelector(state => state.places.selectedArea);

    useEffect(() => {
        if (selectedArea) {
            dispatch(fetchPlaces(selectedArea));
        }
    }, [selectedArea, dispatch]);

    return (
        <div className="placeWrapper">
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