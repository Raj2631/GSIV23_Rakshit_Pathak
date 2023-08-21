import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchInputState {
  value: string;
  hasUserStartedTyping: boolean;
}

const initialState: SearchInputState = {
  value: "",
  hasUserStartedTyping: false,
};

export const SearchSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.hasUserStartedTyping = false;
    },

    startTyping: (state) => {
      state.hasUserStartedTyping = true;
    },
  },
});

export const { setSearchValue, startTyping } = SearchSlice.actions;

export default SearchSlice.reducer;
