import { createSlice } from '@reduxjs/toolkit';

const initialState = true

export const isMobile = createSlice({
  name: 'isMobile',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    trueMobile: (state) => {
      state = true;
    },
    falseMobile: (state) => {
      state = false;
    },
  }
});

export const { trueMobile, falseMobile } = isMobile.actions;

export const selectMobile = (state) => state;

export default isMobile.reducer;
