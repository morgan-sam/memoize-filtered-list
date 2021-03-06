import React, { useState, useEffect } from "react";
import "css/app.css";
import "css/input.css";
import Loading from "components/Loading";
import Search from "components/Search";
import Filter from "components/Filter";
import Info from "components/Info";
import Table from "components/Table";

function App() {
  const [lastSearch, setLastSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const filterBooks = (str) => {
    const filteredList = books.filter((el) =>
      el.title.toLowerCase().match(str.toLowerCase())
    );
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
    setLastSearch(searchTerm);
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
      {!loading && <Info {...{ books, filteredBooks, lastSearch }} />}
      {loading ? <Loading /> : <Table books={filteredBooks} />}
    </div>
  );
}

export default App;
