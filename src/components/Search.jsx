import React from "react";
import "css/search.css";

const Search = (props) => {
  return (
    <form>
      <input
        className="search"
        placeholder="Search library"
        type="text"
        name="name"
      />
    </form>
  );
};

export default Search;
