// src/features/travelPreferences/travelPreferencesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const travelPreferencesSlice = createSlice({
  name: 'travelPreferences',
  initialState: {
    data: null,
    status: 'idle',
    error: null
  },
  reducers: {
    fulfilled: (state,action)=>{
      state.status = 'succeeded';
      state.value = action.payload
    },
    pending: (state)=>{
      state.status = 'loading';
    },
    rejected: (state)=>{
      state.status = 'error';
    }
  }
});
export const {fulfilled,pending, rejected} = travelPreferencesSlice.actions;
export default travelPreferencesSlice.reducer;
