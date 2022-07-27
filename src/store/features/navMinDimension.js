import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navMinDimension: '10vw'
}

export const navMinDimension = createSlice({
  name: 'navMinDimension',
  initialState,
  reducers: {
    setNavMinDimension: (state, action) => {
      state.navMinDimension = action.payload
    }
  }
});

export const { setNavMinDimension } = navMinDimension.actions;

export const selectNavMinDimension = (state) => state.navMinDimension.navMinDimension;

export default navMinDimension.reducer;
