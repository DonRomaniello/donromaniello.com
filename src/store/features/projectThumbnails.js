import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getAllFilesForStore  from '../helpers/getAllFilesForStore';

export const fetchProjectThumbnails = createAsyncThunk(
  'fetchProjectThumbnailsStatus',
  async () => {
    const response = await getAllFilesForStore('projects/images/small');

    return response
  }
)

const initialState = {
  projectThumbnails: {},
  loading: 'idle',
}

const projectThumbnailsSlice = createSlice({
  name: 'projectThumbnails',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(fetchProjectThumbnails.fulfilled, (state, action) => {

      state.projectThumbnails = action.payload
    })
  },
})

export const selectProjectThumbnails = (state) => state.projectThumbnails.projectThumbnails;

export default projectThumbnailsSlice.reducer;
