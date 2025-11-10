// src/features/readinglist/readingListSlice.js
import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "readingList";

const initialState = {
  list: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
};

const readingListSlice = createSlice({
  name: "readingList",
  initialState,
  reducers: {
    addToReadingList(state, action) {
      const exists = state.list.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.list.push({ ...action.payload, status: "Want to Read" });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.list));
      }
    },
    removeFromReadingList(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.list));
    },
    updateStatus(state, action) {
      const { id, status } = action.payload;
      const item = state.list.find((book) => book.id === id);
      if (item) {
        item.status = status;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.list));
      }
    },
    clearReadingList(state) {
      state.list = [];
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

// ✅ Corrected selectors
export const getList = (state) => state.readingList.list;
export const getTotalListQuantity = (state) =>
  state.readingList.list.length;
export const getTotalListPrice = (state) =>
  state.readingList.list.reduce((sum, item) => sum + (item.unitPrice || 0), 0);

// ✅ Actions (aliases preserved for compatibility)
export const {
  addToReadingList: addItem,
  removeFromReadingList: deleteItem,
  updateStatus,
  clearReadingList,
} = readingListSlice.actions;

export default readingListSlice.reducer;
