import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getDocumentForStore } from '../helpers/getDocumentForStore';

export const fetchProject = createAsyncThunk(
  'users/fetchProjectStatus',
  async () => {
    const response = await getDocumentForStore('project', );
    return response
  }
)

const initialState = {
  project: [],
  loading: 'idle',
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(fetchProject.fulfilled, (state, action) => {

      state.project = action.payload
    })
  },
})

export const selectProject = (state) => state.project.project;

export default projectSlice.reducer;
