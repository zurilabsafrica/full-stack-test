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
      const books = action.payload;
      state.allBooks = books;
      console.log("Added books to the store");
    },
    searchBooks: (state, action) => {
      const { searchTerm } = action.payload;
      state.searchResults = state.allBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    addToReadingList: (state, action) => {
      console.log("action.payload in addToReadingList:", action.payload);
      state.readingList.push(action.payload);
      console.log("Pushed book to reading list:", state.readingList);
    },
    removeFromReadingList: (state, action) => {
      const { title, author } = action.payload;
      state.readingList = state.readingList.filter(
        (book) => book.title !== title && book.author !== author
      );
      console.log("book removed");
    },
  },
});

export const {
  addAllBooks,
  searchBooks,
  addToReadingList,
  removeFromReadingList,
} = teacherSlice.actions;

export default teacherSlice.reducer;

// Selectors
export const selectSearchResults = (state) => state.teacher.searchResults;
export const selectReadingList = (state) => state.teacher.readingList;
export const selectAllBooks = (state) => state.teacher.allBooks;
export const selectNumberOfListedBooks = (state) =>
  state.teacher.readingList.length;
export const isBookInReadingList = (state, bookTitle, bookAuthor) =>
  state.teacher.readingList.some(
    (book) => book.title === bookTitle && book.author === bookAuthor
  );
