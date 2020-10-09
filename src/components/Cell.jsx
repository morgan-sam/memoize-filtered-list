import React from "react";

const MAX_CELL_ENTRY_LENGTH = 30;

const Cell = (props) => {
  const { value } = props;

  const shorten = (str) => {
    if (str === undefined) return null;
    else if (str.length > MAX_CELL_ENTRY_LENGTH)
      return str.slice(0, MAX_CELL_ENTRY_LENGTH) + "...";
    else return str;
  };

  const formatContents = (value) => {
    if (typeof value !== "number" && value === undefined) return null;
    else if (Array.isArray(value) && value.length > 0)
      return shorten(value.join(", "));
    else return shorten(value);
  };

  return <td className="table-cell">{formatContents(value)}</td>;
};

export default Cell;
