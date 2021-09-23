import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      const indexOfCommentToRemove = state.findIndex((comment) => comment.id === action.payload);

      state.splice(indexOfCommentToRemove, 1);
    },
  },
});

export const { create, remove } = commentsSlice.actions;

export default commentsSlice.reducer;
