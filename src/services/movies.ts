import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Casts,
  Movie,
  MovieCreditsResponse,
  PopularMoviesResponse,
} from "./types";

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
      query: (page = 1) => `/movie/popular?page=${page}`,
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
    getMovieById: builder.query<Movie, string | number>({
      query: (movieId) => `/movie/${movieId}?language=en-US`,
    }),
    getMovieCredits: builder.query<Casts, string | number>({
      query: (movieId) => `/movie/${movieId}/credits`,
      transformResponse: (response: MovieCreditsResponse) =>
        response.cast.slice(0, 5),
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetMovieByIdQuery,
  useGetMovieCreditsQuery,
} = moviesApi;
