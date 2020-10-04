import React from "react";
import "css/search.css";

const Search = (props) => {
  const { fetchBooks } = props;

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      fetchBooks(e.target.value);
    }
  };

  return (
    <form onKeyDown={onKeyDown}>
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
