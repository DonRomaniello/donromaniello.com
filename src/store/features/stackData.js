import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { doc, getDoc } from "firebase/firestore";

import { db } from '../../config/firebase';

export const fetchStackData = createAsyncThunk(
  'users/fetchStackDataStatus',
  async () => {
    const docSnap = await getDoc(doc(db, "projects", "stackData"))
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
