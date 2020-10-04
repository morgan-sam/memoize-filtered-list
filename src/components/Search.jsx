import React, { useState } from "react";
import "css/search.css";

const Search = (props) => {
  const { fetchBooks } = props;
  const [search, setSearch] = useState("");

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      fetchBooks(search);
      setSearch("");
    }
  };

  return (
    <form onKeyDown={onKeyDown}>
      <input
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search library"
        type="text"
        name="name"
      />
    </form>
  );
};

export default Search;
