import React from "react";
import Card from "@mui/material/Card";

import useBooks from "./hooks/useBooks";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";

const Landing = () => {
  const { loading, error, data } = useBooks();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          {data.books.map((book, i) => (
            <Card
              key={i}
              className="shadow-md rounded-3xl w-64 h-64 cursor-pointer transform transition-transform duration-10 ease-in-out hover:scale-105"
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
    </div>
  );
};

export default Landing;
