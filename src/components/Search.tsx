import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

const Search = () => {
  return (
    <div className="relative flex-grow max-w-sm bg-gray-300  rounded-xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" flex items-center bg-darkPurple rounded-full"
      >
        <SearchIcon size={20} className="ml-2 text-gray-500" strokeWidth={3} />
        <input
          type="text"
          placeholder="Search"
          className="p-1.5 border-none outline-none bg-transparent font-semibold flex-grow"
        />
      </form>
    </div>
  );
};

export default Search;
