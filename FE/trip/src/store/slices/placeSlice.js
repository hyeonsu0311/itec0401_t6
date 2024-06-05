import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlaces = createAsyncThunk(
    'places/fetchPlaces',
    async (area) => {
        const response = await axios.get('https://apis.data.go.kr/B551011/KorService1/areaBasedList1', {
            params: {
              numOfRows: 100,
              MobileOS: 'ETC',
              MobileApp: 'trip',
              serviceKey: 'XUwyR/mV8IUBoZtsh7NeDQG18pmA1/UY40IWuP1MZt3A+/s+xihFUEsy7bMXZ66sNmDVWxcTRu/jbm8Gu0r8qw==',
              _type: 'json',
              arrange: 'O, Q, R',
              areaCode: area.code,
            }
          });
        console.log(response);
        const items = response.data.response.body.items.item;
        return items;
    }
);

const placeSlice = createSlice({
    name: 'places',
    initialState: {
        selectedArea: { code: '', name: '전체'},
        places: [],
        status: 'idle', //'idle', 'loading', 'succeeded'
        error: null
    },
    reducers: {
        setSelectedArea(state, action) {
        state.selectedArea = action.payload;
      },
    },
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
                    title: place.title,
                    contentid: place.contentid
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

export const { setSelectedArea } = placeSlice.actions;
export default placeSlice.reducer;