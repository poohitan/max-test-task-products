import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import commentsReducer from '../features/comments/commentsSlice';

const persistedState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : {};

const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

export default store;
