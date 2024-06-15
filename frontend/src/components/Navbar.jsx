import React from "react";
import { Search } from "@mui/icons-material";
import { Autocomplete } from "@mui/material";

const Navbar = ({ books }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <header className="bg-white p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto shadow-md border-3xl">
        <div className="w-full flex justify-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-steelBlue" />
            </div>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={books}
              getOptionLabel={(option) => option.title}
              renderOption={(props, option) => (
                <li {...props} className="flex items-center my-2 mx-1">
                  <img
                    src={`/${option.coverPhotoURL}`}
                    alt={option.title}
                    className="h-10 w-10 mr-3 rounded-lg"
                  />
                  {option.title}
                </li>
              )}
              renderInput={(params) => (
                <div ref={params.InputProps.ref} className="w-full">
                  <input
                    {...params.inputProps}
                    className="w-full pl-10 pr-4 py-2 rounded-lg text-sm ring-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise"
                    placeholder="Search Here"
                    aria-label="search"
                  />
                </div>
              )}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
