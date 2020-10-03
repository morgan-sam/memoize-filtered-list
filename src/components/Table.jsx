import React from "react";
import "css/table.css";
import { capitalise } from "js/utility";

const Table = (props) => {
  const { books } = props;
  const columns = ["book", "author", "language", "year", "publisher"];
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
            <td className="table-cell">{el.title}</td>
            <td className="table-cell">{el.author_name}</td>
            <td className="table-cell">
              {el.language ? el.language.toString() : null}
            </td>
            <td className="table-cell">{el.first_publish_year}</td>
            <td className="table-cell">
              {el.publisher ? el.publisher.toString() : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
