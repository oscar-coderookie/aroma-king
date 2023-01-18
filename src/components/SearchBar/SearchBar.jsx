import React, { useState } from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";



const SearchBar = ({handleChange}) => {

  return (
    <form className="searchbar">
      <input
        className="searchbar__input"
        autoComplete="off"
        onChange={handleChange}
        placeholder="Type your search...."
      />
        <FaSearch className="searchbar__icon" /> 
     
           
    </form>
  );
};

export default SearchBar;
