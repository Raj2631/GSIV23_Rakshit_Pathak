import React from "react";
import { Home } from "lucide-react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="h-14 border-b-2 border-gray-300 shadow-header  fixed top-0 inset-x-0 flex justify-between items-center">
      <div className="flex justify-between items-center w-full mx-6 ">
        <Search />
        <Home strokeWidth={3} className="text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
