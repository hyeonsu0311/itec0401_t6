import * as React from 'react'
import { useEffect } from 'react';
import RecommendList from './PlaceRecommendList';
import PlaceList from './PlaceList';
import SelectBox from './SelectBox';
import Typography from '@mui/joy/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaces } from './placeSlice';
import { useSearchParams } from 'react-router-dom';
import Divider from '@mui/joy/Divider';
import Title from '../Common/Title';

const PlaceTemplate = () => {
    const dispatch = useDispatch();
    const selectedArea = useSelector(state => state.places.selectedArea);

    useEffect(() => {
        if (selectedArea) {
            dispatch(fetchPlaces(selectedArea));
        }
    }, [selectedArea, dispatch]);

    return (
        <div className="placeContainer">
            <SelectBox/>
            <Title title = {selectedArea.name + ' : '} />
            <Divider />
            <PlaceList/>
        </div>
    )
};

export default PlaceTemplate;