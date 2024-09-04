import { configureStore } from '@reduxjs/toolkit';
import filter from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    filter
  },
})