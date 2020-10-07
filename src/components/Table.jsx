import React from "react";
import "css/table.css";
import { capitalise } from "js/utility";

const Table = (props) => {
  const { books } = props;
  const columns = ["book", "author", "language", "year", "publisher"];

  const shorten = (str) => {
    if (!str) return null;
    else if (str.length > 30) return str.slice(0, 30) + "...";
    else return str;
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
            <td className="table-cell">{shorten(el.title)}</td>
            <td className="table-cell">
              {el.author_name ? shorten(el.author_name.join(" ")) : null}
            </td>
            <td className="table-cell">
              {el.language ? shorten(el.language.toString()) : null}
            </td>
            <td className="table-cell">{shorten(el.first_publish_year)}</td>
            <td className="table-cell">
              {el.publisher ? shorten(el.publisher.toString()) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
