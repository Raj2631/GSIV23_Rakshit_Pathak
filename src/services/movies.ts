import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movies } from "./types";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_MOVIEDB_API,
    prepareHeaders(headers) {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_MOVIEDB_TOKEN}`
      );
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<Movies, number>({
      query: (page = 1) => `/movie/popular?language=en-US&page=${page}`,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = moviesApi;
