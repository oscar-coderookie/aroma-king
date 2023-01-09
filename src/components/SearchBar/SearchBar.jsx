import React from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input className="searchbar__input" autoComplete="off" placeholder="Type your search...." />
      <FaSearch className="searchbar__icon" />
    </div>
  );
};

export default SearchBar;
