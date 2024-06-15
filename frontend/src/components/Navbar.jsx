import React from "react";
import { Autocomplete } from "@mui/material";

import Search from "./Search";

const Navbar = ({ books }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <header className="bg-white p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto shadow-md border-3xl">
        <div className="w-full flex justify-center">
          <div className="relative w-full">
            {/* Search component */}
            <Search books={books}/>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
