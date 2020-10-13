import React, { useState } from "react";
import Cell from "components/Cell";

const Entry = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { entry, entryKey } = props;
  return (
    <tr
      className={expanded ? "expanded" : ""}
      onClick={() => setExpanded(!expanded)}
    >
      {[
        entryKey,
        entry.title,
        entry.author_name,
        entry.language,
        entry.first_publish_year,
        entry.publisher,
      ].map((value, cellKey) => (
        <Cell {...{ expanded, value, cellKey }} key={cellKey} />
      ))}
      {<Cell value={expanded ? "▲" : "▼"} />}
    </tr>
  );
};

export default Entry;
