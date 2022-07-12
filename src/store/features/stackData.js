import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { doc, getDoc } from "firebase/firestore";

import { db } from '../../config/firebase';

export const fetchStackData = createAsyncThunk(
  'fetchStackDataStatus',
  async () => {

    const document = doc(db, "projects", "stackData");

    const docSnap = await getDoc(document)
    return docSnap.data()
  }
)

const initialState = {
  stackData: [],
  loading: 'idle',
}

const stackDataSlice = createSlice({
  name: 'stackData',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(fetchStackData.fulfilled, (state, action) => {

      state.stackData = action.payload
    })
  },
})

export const selectStackData = (state) => state.stackData.stackData;

export default stackDataSlice.reducer;
