import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchInputState {
  value: string;
  isTyping: boolean;
}

const initialState: SearchInputState = {
  value: "",
  isTyping: false,
};

export const SearchSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      state.isTyping = false;
    },

    setIsTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue, setIsTyping } = SearchSlice.actions;

export default SearchSlice.reducer;
