import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlaces = createAsyncThunk(
    'places/fetchPlaces',
    async () => {
        const response = await axios.get('https://apis.data.go.kr/B551011/KorService1/areaBasedSyncList1?numOfRows=50&pageNo=10&MobileOS=ETC&MobileApp=trip&serviceKey=XUwyR%2FmV8IUBoZtsh7NeDQG18pmA1%2FUY40IWuP1MZt3A%2B%2Fs%2BxihFUEsy7bMXZ66sNmDVWxcTRu%2Fjbm8Gu0r8qw%3D%3D&_type=json&arrange=O%3D%EC%A0%9C%EB%AA%A9%EC%88%9C%2C%20Q%3D%EC%88%98%EC%A0%95%EC%9D%BC%EC%88%9C%2C%20R%3D%EC%83%9D%EC%84%B1%EC%9D%BC%EC%88%9C');
        const items = response.data.response.body.items.item;
        return items;
    }
);

const placeSlice = createSlice({
    name: 'places',
    initialState: {
        places: [],
        status: 'idle', //'idle', 'loading', 'succeeded'
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPlaces.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPlaces.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (Array.isArray(action.payload)) {
                state.places = action.payload.map(place => ({
                    addr : place.addr1,
                    image : place.firstimage || '',
                    title: place.title
                }));
            } else {
                state.error = 'Data is not an array';
            }
            })
            .addCase(fetchPlaces.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default placeSlice.reducer;