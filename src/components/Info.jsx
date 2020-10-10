import React from "react";

const Info = (props) => {
  const { filteredBooks, books } = props;
  if (filteredBooks.length === books.length)
    return <div>{`${books.length} results found`}</div>;
  else
    return (
      <div>{`${filteredBooks.length} out of ${books.length} results shown`}</div>
    );
};

export default Info;
