import {createSlice, configureStore} from '@reduxjs/toolkit';
import placeSlice from '@/store/slices/placeSlice';

const store = configureStore({
    reducer:{
        places:placeSlice
    }
});
export default store;
