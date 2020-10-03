import React from "react";

const Table = (props) => {
  const { books } = props;
  const columns = ["book", "author", "language", "year", "publisher"];
  return (
    <table>
      <tr>
        {columns.map((el) => (
          <th>{el}</th>
        ))}
      </tr>
      {books.map((el) => (
        <tr>
          <td>{el.title}</td>
          <td>{el.author_name}</td>
          <td>{el.language ? el.language.toString() : null}</td>
          <td>{el.first_publish_year}</td>
          <td>{el.publisher ? el.publisher.toString() : null}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
