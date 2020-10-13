import React from "react";
import "css/table.css";
import { capitalise } from "js/utility";
import Entry from "components/Entry";

const Table = (props) => {
  const { books } = props;
  const columns = ["ID", "book", "author", "language", "year", "publisher", ""];

  if (books.length > 0)
    return (
      <table className="table">
        <thead>
          <tr>
            {columns.map((el, i) => (
              <th key={i} className="table-cell heading">
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
  else return null;
};

export default Table;
