import React from "react";
import { Autocomplete } from "@mui/material";

import Search from "./Search";

const Navbar = ({ books }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-75 backdrop-blur-sm shadow-md border-b-2">
      <header className="p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
        <div className="w-full flex justify-center">
          <div className="relative w-full">
            <Search books={books} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
