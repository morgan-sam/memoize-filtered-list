import React, { useState, useEffect } from "react";
import "css/filter.css";

const Filter = (props) => {
  const { loading, filterBooks } = props;
  const [filter, setFilter] = useState("");

  useEffect(() => {
    filterBooks(filter);
  }, [filter]);

  return (
    <div className="filter-container">
      <form>
        <input
          className="filter"
          disabled={loading}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter book list titles"
          type="text"
          name="name"
        />
      </form>
      <button onClick={() => setFilter("")}>
        <span role="img" aria-label="cancel">
          ❌
        </span>
      </button>
    </div>
  );
};

export default Filter;
