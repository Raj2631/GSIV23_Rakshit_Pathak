# GSynergy Movies App

## Introduction

This README file provides insights into the development process, decision-making journey, and instructions on how to run the Next.js app locally. The app utilizes server components to fetch data, implements a sidebar layout for the user interface, and employs local storage for storing favorites.

## Getting Started

First, install the dependencies:

```bash
yarn install
# or
npm install
```

Then, setup the environment variables:

```bash
# Create a file .env.local at the root of the project and add these env variables.
VITE_MOVIEDB_API = https://api.themoviedb.org/3
VITE_MOVIEDB_TOKEN = YOUR_MOVIEDB_TOKEN
```

Then, run the development server:

```bash
yarn dev
# or
npm run dev

```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result (Or whatever port vercel logged in the console!)

## Development & Decision making Process

1. I chose to use Vite for the frontend tooling as it provides a faster and smoother workflow
2. Was really interested in exporing RTK Query from Redux for the caching/data fetching tool so I tried to implement it in this project.
3. Handled the search well with debounce. Also showing a loader before the debounce fires so that user can have a visual feedback of loading state even if the API hasn't been fired yet.
4. Used redux slice to handle the global states I needed for search input and and typing state.
5. I created a Layout with the help of react router for my pages, which included Header and the children routes. Created a component for search, moviecard, header, etc.
   5.1 Created Two more components for the movie list and the search list so I could render either of them depending on the search input's value.

##Testing

Added tests using react-testing-library and vitest. I'm mainly testing 3 components of the app. Header, Search - Search Results and the MovieCard component.

To run the test you need to use the commands below.

```bash
yarn test
# or
npm run test

```

## What if I had more time?

1. Add more routes for top rated, upcoming movies, etc. Currently I only show the popular movies on the homepage.
2. Animations with Framer motion. I would definitely add animations with the help of framer motion to provide a better feel to the app. Card animation, or route animations for better UX and interactivity.
3. I'd also add Local storage and a way for users to add a movie to favorites. Would have a /favorites route where I'd then display the movies user would have favorited. This data I'd store in local storage so it persists.
4. Add a 3 way toggle where User would be able to switch between seeing _Movies | TV series | BOTH_ options, and clicking on either of them would cater his requests to the required type. LIke if user wanted to browse TV series as well, user could click on toggle and switch the _mode_ and get results for TV series.
