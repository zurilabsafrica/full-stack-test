import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Listing from "./pages/Listing";

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
