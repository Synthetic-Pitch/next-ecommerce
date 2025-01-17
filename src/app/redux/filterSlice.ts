import { createSlice } from "@reduxjs/toolkit";

type FilterState = {
  filter: 'none' | 'bestSale' | 'byPrice' | 'alphabetical';
};

const initialState: FilterState = {
  filter: 'none',
};

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    bestSale: (state) => {
      state.filter = 'bestSale';
    },
    byPrice: (state) => {
      state.filter = 'byPrice';
    },
    alphabetical: (state) => {
      state.filter = 'alphabetical';
    },
    resetFilter: (state) => {
      state.filter = 'none'; // Optional: Action to reset the filter
    }
  }
});

export const { bestSale, byPrice, alphabetical, resetFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
