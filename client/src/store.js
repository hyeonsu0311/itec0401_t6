// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import travelPreferencesReducer from './components/features/travelPreferences/travelPreferencesSlice';

export const store = configureStore({
  reducer: {
    travelPreferences: travelPreferencesReducer,
  },
});
