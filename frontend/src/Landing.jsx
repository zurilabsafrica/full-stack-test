import React from "react";

import useBooks from "./hooks/useBooks";

const Landing = () => {
  const { loading, error, data } = useBooks();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 bg-gray-100">
      <p className="text-lg font-bold font-mulish mb-4">Hello</p>
      {data.books.map((book, i) => (
        <div key={i} className="p-4 mb-4 bg-white shadow rounded">
          <h3 className="text-xl font-bold mb-2">{book.title}</h3>
          <p className="text-gray-700 mb-2">{book.author}</p>
          <img
            className="w-full h-64 object-cover mb-2"
            src={book.coverPhotoURL}
            alt={book.title}
          />
          <p className="text-sm text-gray-500">
            Reading Level: {book.readingLevel}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Landing;
