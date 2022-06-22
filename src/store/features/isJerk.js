import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isJerk: true
}

export const isJerk = createSlice({
  name: 'isJerk',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    trueJerk: (state) => {
      state.isJerk = true;
    },
    falseJerk: (state) => {
      state.isJerk = false;
    },
    toggleJerk: (state) => {
      state.isJerk = !state.isJerk;
    }
  }
});

export const { trueJerk, falseJerk, toggleJerk } = isJerk.actions;

export const selectJerk = (state) => state.isJerk;

export default isJerk.reducer;
