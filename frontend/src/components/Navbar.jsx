import React from "react";
import { Search } from "@mui/icons-material";
import { Autocomplete, TextField } from "@mui/material";

const Navbar = ({ books }) => {
  return (
    <div className="fixed w-full flex justify-center bg-white z-10">
      <header className=" bg-white p-4 sm:w-3/4 md:w-1/2 lg:w-1/3 fixed left-1/2 transform -translate-x-1/2 z-10 shadow-md border-2xl">
        <div className="mx-auto flex justify-between items-center">
          <div className="text-lg font-semibold">My Application</div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={books.map((book) => book.title)}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    {...params.inputProps}
                    className="w-full pl-10 pr-4 py-2 rounded-lg text-sm ring-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Search…"
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

{
  /* <input
              className="pl-10 pr-4 py-2 rounded-lg text-sm ring-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search…"
              aria-label="search"
            /> */
}

{
  /* <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={books.map((book) => book.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputLabelProps={{
                    style: {}, // increase the font size of the label
                  }}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-sm ring-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              )}
            /> */
}
