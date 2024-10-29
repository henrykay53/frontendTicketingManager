// src/redux/slice/sideNavSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const sideNavSlice = createSlice({
  name: 'sideNav',
  initialState,
  reducers: {
    toggleSideNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSideNav: (state) => {
      state.isOpen = true;
    },
    closeSideNav: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleSideNav, openSideNav, closeSideNav } = sideNavSlice.actions;
export default sideNavSlice.reducer;
