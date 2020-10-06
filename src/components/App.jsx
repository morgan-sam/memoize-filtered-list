import React, { useState, useEffect } from "react";
import "css/app.css";
import Loading from "components/Loading";
import Table from "components/Table";
import Search from "components/Search";
import Filter from "components/Filter";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const filterBooks = (str) => {
    const filteredList = books.filter((el) => el.title.match(str));
    setFilteredBooks(filteredList);
  };

  const fetchBooks = async (searchTerm) => {
    setLoading(true);
    const res = await fetch(
      `http://openlibrary.org/search.json?q=${searchTerm}`
    );
    const json = await res.json();
    setBooks(json.docs);
    localStorage.setItem("books", JSON.stringify(json.docs));
    setLoading(false);
  };

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    const localBooks = JSON.parse(localStorage.getItem("books"));
    if (localBooks && localBooks.length > 0) setBooks(localBooks);
    else fetchBooks("Fantasy");
  }, []);

  return (
    <div className="app">
      <Search {...{ fetchBooks, loading }} />
      <Filter {...{ loading, filterBooks }} />
      {loading ? <Loading /> : <Table books={filteredBooks} />}
    </div>
  );
}

export default App;
