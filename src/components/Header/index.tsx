import Search from "../../features/Search/Search";
import HomeIcon from "../../assets/HomeIcon.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isMovieDetailPage = location.pathname.startsWith("/movieDetail");

  return (
    <div className="h-14 border-b-2 border-gray-300 shadow-header bg-white  fixed top-0 inset-x-0 flex justify-between items-center">
      <div className="flex justify-between items-center w-full mx-6 gap-6">
        {isMovieDetailPage ? (
          <h1 className="font-bold text-lg text-gray-600">Movie Details</h1>
        ) : (
          <Search />
        )}
        <Link to="/">
          <div className="text-gray-500 cursor-pointer">
            <img src={HomeIcon} alt="home-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
