import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MovieCard from "../index";

const mockMovie = {
  adult: false,
  backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
  genre_ids: [16, 35, 10751, 14, 10749],
  id: 976573,
  original_language: "en",
  original_title: "Elemental",
  overview:
    "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
  popularity: 4696.546,
  poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
  release_date: "2023-06-14",
  title: "Elemental",
  video: false,
  vote_average: 7.81,
  vote_count: 1050,
};

describe("MovieCard Component", () => {
  it("renders correctly", () => {
    const tree = render(
      <Router>
        <MovieCard movie={mockMovie} />
      </Router>
    );

    const titleElement = tree.getByText(mockMovie.title);
    const overviewElement = tree.getByText(mockMovie.overview);
    const voteAverageElement = tree.getByText(`(${mockMovie.vote_average})`);
    const posterElement = tree.getByText(mockMovie.title);

    expect(titleElement).toBeInTheDocument();
    expect(overviewElement).toBeInTheDocument();
    expect(voteAverageElement).toBeInTheDocument();
    expect(posterElement).toBeInTheDocument();

    expect(tree).toMatchSnapshot();
  });

  it("displays default description when overview is missing", () => {
    const movieWithoutOverview = { ...mockMovie, overview: "" };

    const { getByText } = render(
      <Router>
        <MovieCard movie={movieWithoutOverview} />
      </Router>
    );

    const defaultDescriptionElement = getByText("No description available.");
    expect(defaultDescriptionElement).toBeInTheDocument();
  });
});
