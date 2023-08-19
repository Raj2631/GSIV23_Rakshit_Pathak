import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, PopularMoviesResponse } from "./types";

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
    getPopularMovies: builder.query<PopularMoviesResponse, number>({
      query: (page = 1) => `/movie/popular?language=en-US&page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.page = newItems.page;
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getMovieById: builder.query<Movie, string>({
      query: (movieId) => `/movie/${movieId}?language=en-US`,
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetMovieByIdQuery } = moviesApi;
