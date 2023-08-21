import { ChangeEvent } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { setSearchValue } from "./SearchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Search = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.searchInput.value);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const clearInput = () => {
    dispatch(setSearchValue(""));
  };

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
          value={searchValue}
          onChange={onInputChange}
        />
        {searchValue && (
          <button onClick={clearInput}>
            <XIcon size="18" className=" text-gray-500 mx-4" />
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
