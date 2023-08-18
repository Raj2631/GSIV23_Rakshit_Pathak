import "./App.css";
import { useGetPopularMoviesQuery } from "./services/movies";

function App() {
  const { data } = useGetPopularMoviesQuery(1);
  console.log(data);

  return <h1>Hello world</h1>;
}

export default App;
