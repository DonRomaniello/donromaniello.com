import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAllDocumentsForStore } from '../helpers/getAllDocumentsForStore';

export const fetchStackData = createAsyncThunk(
  'users/fetchStackDataStatus',
  async () => {
    const response = await getAllDocumentsForStore('projects/stackData');
    return response
  }
)

const initialState = {
  stackData: [],
  loading: 'idle',
}

const stackDataSlice = createSlice({
  name: 'stackData',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(fetchStackData.fulfilled, (state, action) => {

      state.stackData = action.payload
    })
  },
})

export const selectStackData = (state) => state.stackData.stackData;

export default stackDataSlice.reducer;
