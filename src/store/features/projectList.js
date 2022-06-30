import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getDocumentsForStore } from '../helpers/getDocumentsForStore';


// const getProjects = async () => {
//   let projects = []
//   const projectSnapshot = await getDocs(query(collection(db, 'projects')));
//   projectSnapshot.forEach((doc) => {
//     projects.push(doc.data())
//   })
//   return projects
// }

// First, create the thunk
export const fetchProjects = createAsyncThunk(
  'users/fetchProjectsStatus',
  async () => {
    const response = await getDocumentsForStore('projects');
    return response
  }
)

const initialState = {
  projects: [],
  loading: 'idle',
}

// Then, handle actions in your reducers:
const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      // Add user to the state array
      state.projects = action.payload
    })
  },
})

export const selectProjects = (state) => state.projects.projects;

export default projectsSlice.reducer;
