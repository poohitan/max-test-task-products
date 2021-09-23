import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import commentsReducer from '../features/comments/commentsSlice';

const LOCALSTORAGE_PROPERTY_NAME = 'state';

const persistedState = localStorage.getItem(LOCALSTORAGE_PROPERTY_NAME)
  ? JSON.parse(localStorage.getItem(LOCALSTORAGE_PROPERTY_NAME))
  : {};

const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem(LOCALSTORAGE_PROPERTY_NAME, JSON.stringify(store.getState()));
});

export default store;
