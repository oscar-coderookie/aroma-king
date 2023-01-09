import React, { useState } from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";



const SearchBar = () => {
// eslint-disable-next-line
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <form className="searchbar">
      <input
        className="searchbar__input"
        autoComplete="off"
        onChange={handleChange}
        placeholder="Type your search...."
      />
      <button className="searchbar__btn" type="submit" onClick={handleSubmit}>
        <FaSearch className="searchbar__icon" /> 
      </button>
           
    </form>
  );
};

export default SearchBar;
