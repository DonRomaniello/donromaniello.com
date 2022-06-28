import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projectList: []
}

export const projectList = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
    setprojectList: (state, action) => {
      state.projectList = action.payload
    }
  }
});

export const { setprojectList } = projectList.actions;

export const selectprojectList = (state) => state.projectList.projectList;

export default projectList.reducer;
