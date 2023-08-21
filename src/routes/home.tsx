import { useAppSelector } from "../app/hooks";
import Loading from "../components/Loading";
import MoviesList from "../components/MoviesList";
import SearchPage from "../components/SearchPage";

const Home = () => {
  const { value: searchValue, hasUserStartedTyping } = useAppSelector(
    (state) => state.searchInput
  );

  if (hasUserStartedTyping) {
    return <Loading />;
  }

  return <div>{searchValue ? <SearchPage /> : <MoviesList />}</div>;
};

export default Home;
