import { useEffect, useState, ChangeEvent } from "react";
import { SearchIcon } from "lucide-react";
import { useDebounce } from "../../hooks/useDebounce";
import { setSearchValue } from "./SearchSlice";
import { useAppDispatch } from "../../app/hooks";

const Search = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(searchInputText, 500);

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue, dispatch]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputText(e.target.value);
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
          value={searchInputText}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
