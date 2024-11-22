import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  name: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.name = null;
      state.email = null;
      state.token = null;

      // Optionally clear user-related data from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
