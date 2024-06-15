import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Close } from "@mui/icons-material";

const Popup = ({ book, isOpen, onClose }) => {
  const ref = useRef(null);

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

  return isOpen
    ? createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div
            ref={ref}
            className="bg-white p-4 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <Close onClick={onClose} className="text-orangeRed" />
            </div>
            <img
              className="h-48 w-auto mx-auto my-4"
              src={`/${book.coverPhotoURL}`}
              alt={book.title}
            />
            <p className="text-sm">{book.description}</p>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Popup;
