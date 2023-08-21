import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import Header from "..";
import { BrowserRouter as Router } from "react-router-dom";

describe("renders correctly on the home page", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });
});

it("navigates to the home page when Home icon is clicked", () => {
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );

  const homeIcon = screen.getByAltText("home-icon");
  fireEvent.click(homeIcon);

  expect(homeIcon).toBeInTheDocument();
});
