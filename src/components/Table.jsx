import React from "react";
import "css/table.css";
import { capitalise } from "js/utility";

const Table = (props) => {
  const { books } = props;
  const columns = ["book", "author", "language", "year", "publisher"];
  return (
    <table className="table">
      <tr>
        {columns.map((el) => (
          <th className="table-cell">{capitalise(el)}</th>
        ))}
      </tr>
      {books.map((el) => (
        <tr>
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
    </table>
  );
};

export default Table;
