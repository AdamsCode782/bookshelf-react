
import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY_USER = 'readingListUser';

/** Safely load saved username */
function loadUsername() {
  try {
    return localStorage.getItem(STORAGE_KEY_USER) || '';
  } catch (e) {
    return '';
  }
}

const initialState = {
  username: loadUsername(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
      try {
        localStorage.setItem(STORAGE_KEY_USER, action.payload);
      } catch (e) {
      }
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
