import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { Add, Close, Delete } from "@mui/icons-material";
import {
  addToReadingList,
  isBookInReadingList,
  removeFromReadingList,
} from "../features/teacherSlice";

const Popup = ({ book, isOpen, onClose }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const bookIsInReadingList = useSelector((state) =>
    isBookInReadingList(state, book?.title, book?.author)
  );

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!book) return null;

  const handleAddition = () => {
    console.log("Book to be added to listing:", book);
    try {
      dispatch(addToReadingList(book));
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoval = () => {
    console.log("Book to be removed from listing:", book);
    try {
      dispatch(removeFromReadingList(book));
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return isOpen
    ? createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div
            ref={ref}
            className="bg-white p-4 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3 ring-4 ring-turquoise ring-opacity-75"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-center text-steelBlue">
                {book.title}
              </h2>
              <Close
                onClick={onClose}
                className="text-orangeRed cursor-pointer"
              />
            </div>

            <img
              className="h-56 w-auto mx-auto my-4"
              src={`/${book.coverPhotoURL}`}
              alt={book.title}
            />

            <div>
              <div className="text-sm mb-2 text-center">
                <strong>Author:</strong> {book.author}
              </div>
              <div className="text-sm mb-2 text-center">
                <strong>Reading Level:</strong> {book.readingLevel}
              </div>
            </div>

            <div
              className={
                bookIsInReadingList
                  ? `bg-orangeRed text-white w-48 flex flex-row px-auto mx-auto py-1 cursor-pointer rounded-lg`
                  : `bg-turquoise text-white w-32 flex flex-row mx-auto py-1 cursor-pointer rounded-lg`
              }
              onClick={bookIsInReadingList ? handleRemoval : handleAddition}
            >
              {bookIsInReadingList ? (
                <Delete className="h-2 w-2" />
              ) : (
                <Add className="h-5 w-5" />
              )}
              <p>
                {bookIsInReadingList ? "Remove from listing" : "Add to listing"}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Popup;
