import React, { useState, useEffect } from "react";
import Table from "components/Table";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch(" http://openlibrary.org/search.json?q=fantasy");
    const json = await res.json();
    setBooks(json.docs);
    localStorage.setItem("books", JSON.stringify(json.docs));
  };

  useEffect(() => {
    const localBooks = JSON.parse(localStorage.getItem("books"));
    if (localBooks && localBooks.length > 0) setBooks(localBooks);
    else fetchBooks();
  }, []);

  return (
    <div className="App">
      <Table {...{ books }} />
    </div>
  );
}

export default App;
