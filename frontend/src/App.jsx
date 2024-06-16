import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Listing from "./pages/Listing";
import useBooks from "./hooks/useBooks";
import { addAllBooks } from "./features/teacherSlice";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState(null);

  const handleFetch = () => {
    const { load, error, data } = useBooks();
    setLoading(load);
    setError(error);
    setBooks(data.books);
    console.log("Fetched books from api:", books);
  };

  const handleDispatch = () => {
    dispatch(addAllBooks(books));
  };

  // useEffect(() => {
  //   handleFetch();
  //   handleDispatch();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/listing" element={<Listing />} />
      </Routes>
    </Router>
  );
};

export default App;
