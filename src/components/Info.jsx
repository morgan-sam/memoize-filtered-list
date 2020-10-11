import React from "react";

const Info = (props) => {
  const { filteredBooks, books, lastSearch } = props;
  const lastSearchText = lastSearch && `for \"${lastSearch}\"`;

  if (filteredBooks.length === books.length)
    return <div>{`${books.length} results ${lastSearchText} found`}</div>;
  else
    return (
      <div>{`${filteredBooks.length} out of ${books.length} results ${lastSearchText} shown`}</div>
    );
};

export default Info;
