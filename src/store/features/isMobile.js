import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobile: false
}

export const isMobile = createSlice({
  name: 'isMobile',
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload
    }
  }
});

export const { setIsMobile } = isMobile.actions;

export const selectIsMobile = (state) => state.isMobile.isMobile;

export default isMobile.reducer;
