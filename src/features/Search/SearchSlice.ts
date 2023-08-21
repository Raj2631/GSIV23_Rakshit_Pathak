import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchInputState {
  value: string;
}

const initialState: SearchInputState = {
  value: "",
};

export const SearchSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = SearchSlice.actions;

export default SearchSlice.reducer;
