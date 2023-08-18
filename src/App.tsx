import { useState } from "react";
import "./App.css";
import { useGetPopularMoviesQuery } from "./services/movies";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [page, setPage] = useState(1);
  const { data } = useGetPopularMoviesQuery(page);

  return (
    <>
      <InfiniteScroll
        dataLength={data?.results?.length ?? 0}
        next={() => setPage((prev) => prev + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex items-center justify-center flex-col gap-5">
          {data?.results.map((movie) => (
            <div key={movie.id} className="h-48 w-48 bg-black"></div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default App;
