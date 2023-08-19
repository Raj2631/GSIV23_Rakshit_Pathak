import { useState } from "react";
import { useGetPopularMoviesQuery } from "../services/movies";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";
import { Movie } from "../services/types";

const MoviesList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPopularMoviesQuery(page);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <InfiniteScroll
        dataLength={data?.results?.length ?? 0}
        next={() => setPage((prev) => prev + 1)}
        hasMore={(data?.page ?? 0) < (data?.total_pages ?? 0)}
        loader={<h4 className="text-center my-2">Loading...</h4>}
        endMessage={
          <p className="text-center">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex items-center justify-center flex-wrap gap-7">
          {data?.results?.map((movie: Movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default MoviesList;
