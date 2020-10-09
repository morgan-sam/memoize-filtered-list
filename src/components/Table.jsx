import React from "react";
import "css/table.css";
import { capitalise } from "js/utility";

const MAX_CELL_ENTRY_LENGTH = 30;

const Table = (props) => {
  const { books } = props;
  const columns = ["ID", "book", "author", "language", "year", "publisher"];

  const shorten = (str) => {
    if (!str) return null;
    else if (str.length > MAX_CELL_ENTRY_LENGTH)
      return str.slice(0, MAX_CELL_ENTRY_LENGTH) + "...";
    else return str;
  };

  const generateCell = (value, key) => {
    if (value == null)
      return (
        <td key={key} className="table-cell">
          {" "}
        </td>
      );
    else if (Array.isArray(value) && value.length > 0)
      return (
        <td key={key} className="table-cell">
          {shorten(value.join(", "))}
        </td>
      );
    else
      return (
        <td key={key} className="table-cell">
          {shorten(value)}
        </td>
      );
  };

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
            ].map((val, key) => generateCell(val, key))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
