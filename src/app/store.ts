import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../services/movies";
import SearchReducer from "../features/Search/SearchSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    searchInput: SearchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
