import { useParams } from "react-router-dom";
import {
  useGetMovieByIdQuery,
  useGetMovieCreditsQuery,
} from "../services/movies";
import { ImgBaseURL } from "../utils/constants";
import { Cast } from "../services/types";
import Error from "../components/Error";

const MovieDetail = () => {
  const { movieId } = useParams();
  const {
    data: movie,
    error,
    isLoading,
  } = useGetMovieByIdQuery(String(movieId));
  const { data: castAndDirectorData, isLoading: isCastLoading } =
    useGetMovieCreditsQuery(String(movieId));

  if (isLoading || isCastLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (error) {
    return <Error />;
  }

  const releasedYear = movie?.release_date?.split("-")[0];
  const director = castAndDirectorData?.director;
  const cast = castAndDirectorData?.cast.slice(0, 5);

  return (
    <div className="flex flex-col xl:flex-row justify-center gap-6 m-5 max-w-screen-2xl  px-5 mx-auto">
      <div className="flex items-center justify-center ">
        <img
          src={`${ImgBaseURL}/${movie?.poster_path}`}
          className="h-80 md:h-auto md:w-80 shadow-xl"
        />
      </div>
      <div className="flex flex-col gap-1 text-left xl:w-7/12 ">
        <h1 className="text-gray-800  font-bold text-2xl">
          {movie?.title}{" "}
          <span className="text-gray-400">
            ({movie?.vote_average?.toFixed(1)})
          </span>
        </h1>
        <div className="text-gray-600 font-semibold my-2">
          <div>
            {releasedYear} / {movie?.runtime}mins / {director}
          </div>
          <div>
            Cast:{" "}
            {cast?.map((actor: Cast, i: number) => (
              <span key={actor.id}>
                {actor.name}
                {i !== cast.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>

        <div className="text-gray-800 font-medium text-lg ">
          Description: {movie?.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
