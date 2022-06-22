import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addendum: ''
}

export const titleAddendum = createSlice({
  name: 'titleAddendum',
  initialState,
  reducers: {
    setTitleAddendum: (state, action) => {
      state.addendum = action.payload
    }
  }
});

export const { setTitleAddendum } = titleAddendum.actions;

export const selectTitleAddendum = (state) => state.titleAddendum.addendum;

export default titleAddendum.reducer;
