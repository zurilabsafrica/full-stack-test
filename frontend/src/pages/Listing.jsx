import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectReadingList,
  selectNumberOfListedBooks,
} from "../features/teacherSlice";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";
import { Card } from "@mui/material";

const Listing = () => {
  const listedBooks = useSelector(selectReadingList);
  const numberOfListedBooks = useSelector(selectNumberOfListedBooks);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpen = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex flex-row justify-center">
      <div>
        <Navbar books={listedBooks} listedBooks={numberOfListedBooks} />
      </div>
      {listedBooks && listedBooks.length > 0 ? (
        <div className="mt-[6rem] flex justify-center overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            {listedBooks.map((book, i) => (
              <Card
                key={i}
                className="shadow-md rounded-3xl w-64 h-64 cursor-pointer transform transition-transform duration-10 ease-in-out "
                onClick={() => handleOpen(book)}
              >
                <img
                  className="object-cover w-64 h-64 "
                  src={`/${book.coverPhotoURL}`}
                  alt={book.title}
                />
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <p>There are no listed books by the teacher</p>
      )}
      <Popup isOpen={openModal} onClose={handleClose} book={selectedBook} />
    </div>
  );
};

export default Listing;
