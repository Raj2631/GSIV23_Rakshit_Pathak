import { useAppSelector } from "../app/hooks";
import MoviesList from "../components/MoviesList";
import SearchPage from "../components/SearchPage";

const Home = () => {
  const { value: searchValue, isTyping } = useAppSelector(
    (state) => state.searchInput
  );

  return <div>{searchValue || isTyping ? <SearchPage /> : <MoviesList />}</div>;
};

export default Home;
