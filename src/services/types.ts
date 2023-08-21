export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime?: number;
}
export interface MoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movies;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface MovieCreditsResponse {
  id: number;
  crew: Crew[];
  cast: Cast[];
}

export interface CastsAndDirector {
  cast: Cast[];
  director: string;
}
export type Movies = Movie[];
