import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortId: 0,
  sortList: ["popularity", "price (descending)", "price (ascending)", "alphabetically"],
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortId: (state, action) => {
      state.sortId = action.payload;
    },
  },
});

export const { setSortId } = sortSlice.actions;

export default sortSlice.reducer;