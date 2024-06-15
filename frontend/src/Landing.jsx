import React, { useState } from "react";
import Card from "@mui/material/Card";

import useBooks from "./hooks/useBooks";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";
import Modal from "./components/Modal";
import { Box, Skeleton } from "@mui/material";

const Landing = () => {
  const { loading, error, data } = useBooks();
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpen = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  if (loading)
    return (
      <Box sx={{ pt: 0.5 }}>
        {/* <Skeleton /> */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Skeleton key={item} width="60%" variant="circular" />
        ))}
      </Box>
    );
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="flex flex-row justify-center">
      <div className="mb-12">
        <Navbar books={data.books} />
      </div>
      <div className="flex justify-center overflow-auto">
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
      <Modal open={openModal} handleClose={handleClose} book={selectedBook} />
    </div>
  );
};

export default Landing;
