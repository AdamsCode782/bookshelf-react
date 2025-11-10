import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import readingListReducer from "./features/readinglist/readingListSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    readingList: readingListReducer, 
  },
});

export default store;
