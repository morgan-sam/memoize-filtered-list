import React, { useState, useEffect } from "react";
import "css/app.css";
import Table from "components/Table";
import Search from "components/Search";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (searchTerm) => {
    const res = await fetch(
      `http://openlibrary.org/search.json?q=${searchTerm}`
    );
    const json = await res.json();
    setBooks(json.docs);
    localStorage.setItem("books", JSON.stringify(json.docs));
  };

  useEffect(() => {
    const localBooks = JSON.parse(localStorage.getItem("books"));
    if (localBooks && localBooks.length > 0) setBooks(localBooks);
    else fetchBooks("Fantasy");
  }, []);

  return (
    <div className="app">
      <Search {...{ fetchBooks }} />
      <Table {...{ books }} />
    </div>
  );
}

export default App;
