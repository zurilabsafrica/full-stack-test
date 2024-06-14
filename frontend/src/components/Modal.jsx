import React from "react";
import { Modal as MUIModal, Box, Typography, styled } from "@mui/material";

const StyledModal = styled(MUIModal)`
  & .Mui-focused {
    outline: none;
  }
`;

const Modal = ({ open, handleClose, book }) => {
  return (
    <StyledModal open={open} onClose={handleClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white  shadow-md p-4">
        <p>{book?.title}</p>
      </div>
    </StyledModal>
  );
};

export default Modal;

// type Book {
//   title: String
//   author: String
//   coverPhotoURL: String
//   readingLevel: String
// }
