import React from "react";
import Cell from "components/Cell";

const Entry = (props) => {
  const { entry, entryKey } = props;
  return (
    <tr>
      {[
        entryKey,
        entry.title,
        entry.author_name,
        entry.language,
        entry.first_publish_year,
        entry.publisher,
      ].map((value, cellKey) => (
        <Cell {...{ value, cellKey }} key={cellKey} />
      ))}
    </tr>
  );
};

export default Entry;
