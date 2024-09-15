import { configureStore } from '@reduxjs/toolkit';
import filter from './Filter/filterSlice';
import sort from './Sort/sortSlice'

export const store = configureStore({
  reducer: {
    filter,
    sort
  },
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())