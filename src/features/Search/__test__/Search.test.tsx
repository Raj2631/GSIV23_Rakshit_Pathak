import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Search from "../Search";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { moviesApi } from "../../../services/movies";
import Loading from "../../../components/Loading";
import MovieCard from "../../../components/MovieCard";
import { BrowserRouter as Router } from "react-router-dom";

describe("Search Input component", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  it("Renders search result when input changes", async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText("Search");

    fireEvent.change(searchInput, { target: { value: "test" } });

    await waitFor(() =>
      expect(store.getState().searchInput.value).toEqual("test")
    );

    function Movies() {
      const { data, error, isLoading } =
        moviesApi.endpoints.getMoviesByTitle.useQuery({
          title: store.getState().searchInput.value,
          page: 1,
        });

      if (isLoading) {
        return <Loading />;
      }

      if (error) {
        <p>Error</p>;
      }

      const movie = data?.results[0];
      return <div>{movie && <MovieCard key={movie.id} movie={movie} />}</div>;
    }

    const tree = render(
      <Provider store={store}>
        <Router>
          <Movies />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(async () => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(await screen.findByText("Test")).toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });
});
