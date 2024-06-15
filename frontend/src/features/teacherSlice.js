import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    searchResults: [],
    readingList: [],
    allBooks: [],
  },
  reducers: {
    addAllBooks: (state, action) => {
      // New reducer for adding all books
      const { books } = action.payload;
      state.allBooks = books;
    },
    searchBooks: (state, action) => {
      const { searchTerm } = action.payload;
      state.searchResults = state.allBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    addToReadingList: (state, action) => {
      const { book } = action.payload;
      // Add the book to the readingList state
      state.readingList.push(book);
    },
    removeFromReadingList: (state, action) => {
      const { bookId } = action.payload;
      // Remove the book from the readingList state
      state.readingList = state.readingList.filter(
        (book) => book.id !== bookId
      );
    },
  },
});

export const { searchBooks, addToReadingList, removeFromReadingList } =
  teacherSlice.actions;

export default teacherSlice.reducer;
