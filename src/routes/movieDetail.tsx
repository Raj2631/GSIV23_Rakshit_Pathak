import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../services/movies";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data, error } = useGetMovieByIdQuery(movieId || "");
  console.log(data, error);
  return (
    <div>
      <div className="mt-16">MovieDetail: {movieId}</div>
    </div>
  );
};

export default MovieDetail;
