import React, { useState } from "react";

const Search = (props) => {
  const { fetchBooks, loading } = props;
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
    <div className="input-container">
      <form onKeyDown={onKeyDown}>
        <input
          className="input"
          disabled={loading}
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
