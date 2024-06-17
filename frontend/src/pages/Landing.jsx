import React, { useState } from "react";
import { Box, Skeleton, Card } from "@mui/material";
import { useSelector } from "react-redux";

import useBooks from "../hooks/useBooks";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import { selectNumberOfListedBooks } from "../features/teacherSlice";

const Landing = () => {
  const { loading, error, data } = useBooks();
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const numberOfListedBooks = useSelector(selectNumberOfListedBooks);

  const handleOpen = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  if (loading)
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 9999,
        }}
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
    );
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="flex flex-row justify-center">
      <div className="">
        <Navbar books={data.books} listedBooks={numberOfListedBooks} />
      </div>
      <div className="mt-[6rem] flex justify-center overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          {data.books.map((book, i) => (
            <Card
              key={i}
              className="shadow-md rounded-3xl w-64 h-64 cursor-pointer transform transition-transform duration-10 ease-in-out hover:scale-105"
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
      <Popup isOpen={openModal} onClose={handleClose} book={selectedBook} />
    </div>
  );
};

export default Landing;
