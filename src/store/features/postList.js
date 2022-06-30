import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getDocumentsForStore } from '../helpers/getDocumentsForStore';

export const fetchPosts = createAsyncThunk(
  'users/fetchPostsStatus',
  async () => {
    const response = await getDocumentsForStore('blog');
    return response
  }
)

const initialState = {
  posts: [],
  loading: 'idle',
}

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(fetchPosts.fulfilled, (state, action) => {

      state.post = action.payload
    })
  },
})

export const selectPost = (state) => state.post.post;

export default postsSlice.reducer;
