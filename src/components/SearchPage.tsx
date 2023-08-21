import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";
import { MoreHorizontal } from "lucide-react";
import { MoviesResponse } from "../services/types";

type Props = {
  data: MoviesResponse;
  incrementPage: () => void;
};

const SearchPage = ({ data, incrementPage }: Props) => {
  if (data?.results?.length === 0) {
    return (
      <p className="text-center my-10">
        <b>No movies found!</b>
      </p>
    );
  }

  return (
    <>
      <InfiniteScroll
        dataLength={data?.results?.length ?? 0}
        next={incrementPage}
        hasMore={(data?.page ?? 0) < (data?.total_pages ?? 0)}
        loader={
          <div className="flex items-center justify-center my-2">
            <MoreHorizontal className="text-gray-800" size={34} />
          </div>
        }
        endMessage={
          <p className="text-center my-10">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex items-center justify-center flex-wrap gap-7">
          {data?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default SearchPage;
