import React, { useState } from "react";
import "css/search.css";

const Search = (props) => {
  const { fetchBooks } = props;
  const [search, setSearch] = useState("");

  const searchSubmit = async () => {
    await fetchBooks(search);
    setSearch("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      searchSubmit();
    }
  };

  return (
    <div className="search-container">
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
      <button onClick={searchSubmit}>
        <span role="img" aria-label="search">
          🔍
        </span>
      </button>
      <button onClick={() => setSearch("")}>
        <span role="img" aria-label="cancel">
          ❌
        </span>
      </button>
    </div>
  );
};

export default Search;
