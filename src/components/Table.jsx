import React from "react";
import "css/table.css";
import { capitalise } from "js/utility";
import Cell from "components/Cell";

const Table = (props) => {
  const { books } = props;
  const columns = ["ID", "book", "author", "language", "year", "publisher"];

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((el, i) => (
            <th key={i} className="table-cell">
              {capitalise(el)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((el, i) => (
          <tr key={i}>
            {[
              i,
              el.title,
              el.author_name,
              el.language,
              el.first_publish_year,
              el.publisher,
            ].map((value, cellKey) => (
              <Cell {...{ value, cellKey }} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
