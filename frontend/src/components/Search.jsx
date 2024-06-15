import React, { useState } from "react";
import { Autocomplete } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import Popup from "./Popup";

const Search = ({ books }) => {
  const [value, setValue] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSearch = () => {
    if (value) {
      console.log("Opening popup for book:", value);
      setPopupOpen(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div
        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto"
        onClick={handleSearch}
      >
        <SearchIcon className="h-5 w-5 text-steelBlue cursor-pointer" />
      </div>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={books}
        getOptionLabel={(option) => option.title}
        onChange={(event, newValue) => {
          console.log("Selected book:", newValue);
          setValue(newValue);
        }}
        renderOption={(props, option) => (
          <li {...props} className="flex items-center my-2 mx-1">
            <img
              src={option.coverPhotoURL}
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
              onKeyDown={handleKeyDown}
            />
          </div>
        )}
      />
      <Popup
        book={value}
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
};

export default Search;
