import React, { useState, useEffect } from "react";
import Table from "components/Table";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch(" http://openlibrary.org/search.json?q=fantasy");
      const json = await res.json();
      console.log(json.docs);
      setBooks(json.docs);
    };
    getBooks();
  }, []);

  return (
    <div className="App">
      <Table {...{ books }} />
    </div>
  );
}

export default App;
