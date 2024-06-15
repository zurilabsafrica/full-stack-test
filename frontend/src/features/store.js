import { configureStore } from "@reduxjs/toolkit";

import teacherReducer from "./teacherSlice";

const preloadedState = {
  teacher: {
    searchResults: [],
    readingList: [],
  },
};

const store = configureStore({
  reducer: {
    teacher: teacherReducer,
  },
  preloadedState,
});

export default store;
