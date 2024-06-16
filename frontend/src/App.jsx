import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Listing from "./pages/Listing";
import useBooks from "./hooks/useBooks";
import { addAllBooks } from "./features/teacherSlice";

const App = () => {
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
