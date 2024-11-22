// src/redux/slice/sideNavSlice.js
import { createSlice } from '@reduxjs/toolkit';



const sideNavSlice = createSlice({
  name: 'sideNav',
  initialState: {
    isOpen: false,
  },

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



const seatCapacity = createSlice({

  name: "SeatCapacity",
  initialState: {
    isSeatAvailable: false,

  },

  reducers: {
    isAvailable: (state) => {
      state.isSeatAvailable = true;

    },

    isNotAvailable: (state) => {
      state.isSeatAvailable  = false;
    }
  }
})



export const { toggleSideNav, openSideNav, closeSideNav } = sideNavSlice.actions;
export default sideNavSlice.reducer;
