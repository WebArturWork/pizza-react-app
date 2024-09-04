import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesId: 0,
    categories: ['All', 'Meat','Vegetarian','Grill','Sharp',]
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoriesId: (state, action) => {
            state.categoriesId = action.payload;
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setCategoriesId } = filterSlice.actions
  
  export default filterSlice.reducer