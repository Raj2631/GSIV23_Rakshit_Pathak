import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import Loading from "../components/Loading";
import MoviesList from "../components/MoviesList";
import SearchPage from "../components/SearchPage";
import { useLazyGetMoviesByTitleQuery } from "../services/movies";
import { useDebounce } from "../hooks/useDebounce";
import Error from "../components/Error";

const Home = () => {
  const searchValue = useAppSelector((state) => state.searchInput.value);
  const [searchMovie, { data, error, isLoading }] =
    useLazyGetMoviesByTitleQuery();
  const [page, setPage] = useState(1);

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedValue) {
      searchMovie({
        title: debouncedValue,
        page,
      });
    }
  }, [debouncedValue, page, searchMovie]);

  const incrementPage = () => {
    setPage((prev) => prev + 1);
  };
  if (error) {
    return <Error />;
  }

  if ((searchValue && !data) || isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {searchValue && data ? (
        <SearchPage data={data} incrementPage={incrementPage} />
      ) : (
        <MoviesList />
      )}
    </div>
  );
};

export default Home;
