import { useState } from "react";
import "./App.css";
import { useGetPopularMoviesQuery } from "./services/movies";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./components/MovieCard";
import { Movie } from "./services/types";

function App() {
  const [page, setPage] = useState(1);
  const { data } = useGetPopularMoviesQuery(page);

  return (
    <>
      <InfiniteScroll
        dataLength={data?.results?.length ?? 0}
        next={() => setPage((prev) => prev + 1)}
        hasMore={true}
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
}

export default App;
