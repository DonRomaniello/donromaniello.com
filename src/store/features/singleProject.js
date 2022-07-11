import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getDocumentForStore } from '../helpers/getDocumentForStore';

import { getFileForStore } from '../helpers/getFileForStore';

export const fetchProject = createAsyncThunk(
  'users/fetchProjectStatus',
  async (fields) => {

    const { matchField, matchStatement } = fields

    let response = {}

    const projectData = await getDocumentForStore('projects',
                                                  matchField,
                                                  matchStatement);


    response.data = projectData[0]

    const headerImageName = 'projects/images/full/'
                            + matchStatement
                            .toLowerCase()
                            .replace(/[^a-z0-9]/gi, '')
                            + '.webp'


    const headerImageBlob = await getFileForStore(headerImageName)

    response.headerImage = headerImageBlob

    return response
  }
)

const initialState = {
  project: {data: {},
  headerImage: '',
  loading: 'idle',
}}

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
