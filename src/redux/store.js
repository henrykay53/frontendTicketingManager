import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalSlice/modalSlice';
import sideNavReducer from './slice/sideNavSlice';


const store = configureStore({
  reducer: {
    modal: modalReducer,
    sideNav: sideNavReducer,
  },
});

export default store;

