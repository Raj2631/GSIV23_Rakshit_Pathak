import { Link } from "react-router-dom";
import { Movie } from "../services/types";
import { ImgBaseURL } from "../utils/constants";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  const { title, overview, vote_average } = movie;
  return (
    <div className="w-52 rounded-lg cursor-pointer overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <Link to={`/movieDetail/${movie.id}`}>
        <img
          key={movie.id}
          src={`${ImgBaseURL}/${movie.poster_path}`}
          className="w-full bg-black bg-cover"
        />
        <div className=" py-2 px-2">
          <div className="flex items-center  justify-between text-sm">
            <div className="w-24 truncate text-left font-semibold">{title}</div>
            <div className="text-gray-400">({vote_average})</div>
          </div>
          <div className="w-full text-sm text-left my-1 text-gray-500 line-clamp-2">
            {overview}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
