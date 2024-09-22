import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortId: 3,
  sortList: [
    "alphabetically",
    "price (descending)",
    "price (ascending)",
    "popularity",
  ],
  sortOptions: [
    { sortBy: "title", order: "asc" },
    { sortBy: "price", order: "asc" },
    { sortBy: "price", order: "desc" },
    { sortBy: "rating", order: "desc" },
  ],
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
