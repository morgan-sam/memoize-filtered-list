import React from "react";
import "css/filter.css";

const Filter = (props) => {
  const { loading, filterBooks } = props;

  return (
    <div className="filter-container">
      <form>
        <input
          className="filter"
          disabled={loading}
          onChange={(e) => filterBooks(e.target.value)}
          placeholder="Filter book list titles"
          type="text"
          name="name"
        />
      </form>
    </div>
  );
};

export default Filter;
