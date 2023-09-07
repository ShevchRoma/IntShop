import React from "react";
import "./Search.scss";
import { useAppDispatch } from "../../redux/store";
import { debounce } from "lodash";
import { setSearch } from "../../redux/filter/filterSlice";
import { useTypedSelector } from "../../typedHook/useTypedSelector";

const Search = () => {
  const { search } = useTypedSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 400),
    []
  );

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    updateSearchValue(e.target.value);
  };

  const clearSearch = () => {
    dispatch(setSearch(""));
  };

  return (
    <div className="search">
      <form>
        <input
          onChange={onSearchChange}
          type="text"
          value={search}
          placeholder="Enter product name"
        />
        {search && <span onClick={clearSearch}>&times;</span>}
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
