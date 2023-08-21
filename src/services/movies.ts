import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CastsAndDirector,
  Movie,
  MovieCreditsResponse,
  MoviesResponse,
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
    getPopularMovies: builder.query<MoviesResponse, number>({
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
    getMovieCredits: builder.query<CastsAndDirector, string | number>({
      query: (movieId) => `/movie/${movieId}/credits`,
      transformResponse: (response: MovieCreditsResponse) => {
        return {
          cast: response.cast.slice(0, 5),
          director:
            response.crew.find((person) => person.job === "Director")?.name ??
            "No Director found",
        };
      },
    }),
    getMoviesByTitle: builder.query<
      MoviesResponse,
      { title: string; page: number }
    >({
      query: ({ title, page = 1 }) =>
        `/search/movie?language=en-US&query=${title}&page=${page}`,
      serializeQueryArgs: ({ endpointName, ...rest }) => {
        return endpointName + rest.queryArgs.title;
      },
      merge: (currentCache, newItems) => {
        currentCache.page = newItems.page;
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetMovieByIdQuery,
  useGetMovieCreditsQuery,
  useLazyGetMoviesByTitleQuery,
} = moviesApi;
