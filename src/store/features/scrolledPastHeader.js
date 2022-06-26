import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrolledPast: 0
}

export const scrolledPastHeader = createSlice({
  name: 'scrolledPastHeader',
  initialState,
  reducers: {
    setScrolledPastHeader: (state, action) => {
      state.scrolledPastHeader = action.payload
    }
  }
});

export const { setScrolledPastHeader } = scrolledPastHeader.actions;

export const selectScrolledPastHeader = (state) => state.scrolledPastHeader.scrolledPastHeader;

export default scrolledPastHeader.reducer;
