import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  return (
    <div>
      <div className="mt-16">MovieDetail: {movieId}</div>
    </div>
  );
};

export default MovieDetail;
