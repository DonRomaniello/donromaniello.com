import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getDocumentForStore } from '../helpers/getDocumentForStore';

export const fetchProject = createAsyncThunk(
  'users/fetchProjectStatus',
  async (fields) => {

    const { matchField, matchStatement} = fields

    let response = await getDocumentForStore('projects',
                                                matchField,
                                                matchStatement);
    return response[0]
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
