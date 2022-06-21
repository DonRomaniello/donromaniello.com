import { createSlice } from '@reduxjs/toolkit';

const initialState = true

export const isJerk = createSlice({
  name: 'isJerk',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    trueJerk: (state) => {
      state = true;
    },
    falseJerk: (state) => {
      state = false;
    },
  }
});

export const { trueJerk, falseJerk } = isJerk.actions;

export const selectJerk = (state) => state;

export default isJerk.reducer;
