import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAuthHeader = (getState) => {
  const token = getState().auth.token;
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const fetchTopics = createAsyncThunk('topics/fetch', async (_, { getState }) => {
  const res = await axios.get('/api/topics', getAuthHeader(getState));
  return res.data;
});

export const toggleProblem = createAsyncThunk('topics/toggle', async ({ topicId, index }, { getState }) => {
  const res = await axios.put(`/api/topics/${topicId}/${index}`, {}, getAuthHeader(getState));
  return res.data;
});

const topicSlice = createSlice({
  name: 'topics',
  initialState: { list: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(toggleProblem.fulfilled, (state, action) => {
        const idx = state.list.findIndex(t => t._id === action.payload._id);
        if (idx !== -1) state.list[idx] = action.payload;
      });
  }
});

export default topicSlice.reducer;
