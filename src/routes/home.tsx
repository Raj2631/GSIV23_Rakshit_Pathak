import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import MoviesList from "../components/MoviesList";
import SearchPage from "../components/SearchPage";

const Home = () => {
  const { value: searchValue, isTyping } = useAppSelector(
    (state: RootState) => state.searchInput
  );

  return <div>{searchValue || isTyping ? <SearchPage /> : <MoviesList />}</div>;
};

export default Home;
