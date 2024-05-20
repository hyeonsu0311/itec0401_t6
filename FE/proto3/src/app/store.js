import {createSlice, configureStore} from '@reduxjs/toolkit'
import placeSlice from '../components/Place/placeSlice';

const store = configureStore({
    reducer:{
        places:placeSlice
    }
});
export default store;
