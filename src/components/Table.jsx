import React from "react";
import "css/table.css";
import { capitalise } from "js/utility";
import Entry from "components/Entry";

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
        {books.map((entry, entryKey) => (
          <Entry {...{ entry, entryKey }} key={entryKey} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
