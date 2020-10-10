import React from "react";

const MAX_CELL_ENTRY_LENGTH = 30;

const Cell = (props) => {
  const { value } = props;

  const shorten = (str) => str.slice(0, MAX_CELL_ENTRY_LENGTH) + "...";

  const getCell = (str) => {
    if (str === undefined) return <td className="table-cell" />;
    else if (str.length > MAX_CELL_ENTRY_LENGTH)
      return (
        <td className="table-cell" title={str}>
          {shorten(str)}
        </td>
      );
    else return <td className="table-cell">{str}</td>;
  };

  if (typeof value !== "number" && value === undefined)
    return <td className="table-cell" />;
  else if (Array.isArray(value) && value.length > 0)
    return getCell(value.join(", "));
  else return getCell(value);
};

export default Cell;
