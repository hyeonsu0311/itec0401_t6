import {createSlice, configureStore} from '@reduxjs/toolkit';
import placeSlice from '@/store/slices/placeSlice';
import locationSlice from './slices/locationSlice';

const store = configureStore({
    reducer:{
        places:placeSlice,
        location:locationSlice,
    }
});
export default store;
