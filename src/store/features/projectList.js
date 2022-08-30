import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAllDocumentsForStore } from '../helpers/getAllDocumentsForStore';

export const fetchProjects = createAsyncThunk(
  'fetchProjectsStatus',
  async () => {
    const response = await getAllDocumentsForStore('projects', 'prominence');
    return response
  }
)

const initialState = {
  projects: [],
  loading: 'idle',
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload.sort((a, b) => a.prominence - b.prominence)
    })
  },
})

export const selectProjects = (state) => state.projects.projects;

export default projectsSlice.reducer;
