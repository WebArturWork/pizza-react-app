import { configureStore } from '@reduxjs/toolkit';
import filter from './Filter/filterSlice';
import sort from './Sort/sortSlice'

export const store = configureStore({
  reducer: {
    filter,
    sort
  },
})