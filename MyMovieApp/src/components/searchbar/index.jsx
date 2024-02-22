import React from "react";
import style from "./searchbar.module.css";


const SearchBar = (props) => {
  const { setSearch,selectTab, search } = props;

  const onChangeInput = (e) => {
    const { value } = e.target;
    setSearch(value.toLowerCase());
    selectTab(null)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const searchedInput = e.target[0].value;
    setSearch(searchedInput.toLowerCase());
    selectTab(null)
  };
  return (
    <div className={style.searchBar}>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeInput}
          name="search"
          value={search}
          placeholder="Search Starship..."
        />
        
      </form>
    </div>
  );
};
export default SearchBar;