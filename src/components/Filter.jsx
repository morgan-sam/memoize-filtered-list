import React, { useState } from "react";
import "css/filter.css";

const Filter = (props) => {
  const { loading } = props;
  const [search, setSearch] = useState("");

  return (
    <div className="filter-container">
      <form>
        <input
          className="filter"
          disabled={loading}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter book list"
          type="text"
          name="name"
        />
      </form>
    </div>
  );
};

export default Filter;
