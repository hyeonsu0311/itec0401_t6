import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMatches = createAsyncThunk(
  'match/fetchMatches',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/findMatches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const matchSlice = createSlice({
  name: 'match',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default matchSlice.reducer;
