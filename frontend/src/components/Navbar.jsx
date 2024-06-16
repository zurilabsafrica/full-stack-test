import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Book, Home } from "@mui/icons-material";

import Search from "./Search";

const Navbar = ({ books, listedBooks }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isListing = location.pathname === "/listing";

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-75 backdrop-blur-sm shadow-md border-b-2">
      <header className="p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
        <div className="w-full flex items-center justify-center">
          <div
            className={`h-8 w-8 text-steelBlue cursor-pointer ${
              isHome ? "border-b-2 border-turquoise" : ""
            }`}
            onClick={() => navigate("/")}
          >
            <Home />
          </div>
          {books ? (
            <>
              <div className="relative w-full mx-2">
                <Search books={books} />
              </div>
            </>
          ) : (
            <></>
          )}

          <div
            className={`relative cursor-pointer ${
              isListing ? "border-b-2 border-turquoise" : ""
            }`}
            onClick={() => navigate("/listing")}
          >
            <Book className="h-5 w-5 text-steelBlue" />
            {listedBooks > 0 && (
              <span className="absolute top-0 right-0 bg-yellowDark text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {listedBooks}
              </span>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
