import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAllDocumentsForStore } from '../helpers/getAllDocumentsForStore';

export const fetchProjects = createAsyncThunk(
  'users/fetchProjectsStatus',
  async () => {
    const response = await getAllDocumentsForStore('projects');
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

      state.projects = action.payload
    })
  },
})

export const selectProjects = (state) => state.projects.projects;

export default projectsSlice.reducer;
