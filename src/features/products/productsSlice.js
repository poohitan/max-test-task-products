import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {
      const indexOfProductToUpdate = state.findIndex((product) => product.id === action.payload.id);

      state.splice(indexOfProductToUpdate, 1, action.payload);
    },
    remove: (state, action) => {
      const indexOfProductToRemove = state.findIndex((product) => product.id === action.payload);

      state.splice(indexOfProductToRemove, 1);
    },
  },
});

export const { create, update, remove } = productsSlice.actions;

export default productsSlice.reducer;
