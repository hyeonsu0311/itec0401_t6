import * as React from 'react'
import { useEffect } from 'react';
import RecommendList from './PlaceRecommendList';
import PlaceList from './PlaceList';
import SelectTag from './SelectTag';
import { useDispatch } from 'react-redux'
import { fetchPlaces } from './placeSlice';

const PlaceTemplate = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPlaces());
    }, [dispatch]);

    return (
        <div className="placeWrapper">
            <SelectTag/>;
            <PlaceList/>;
        </div>
    )
};

export default PlaceTemplate;