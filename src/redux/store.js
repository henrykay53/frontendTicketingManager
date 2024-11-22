import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalSlice/modalSlice';
import sideNavReducer from './slice/sideNavSlice';
import userReducer from './slice/usersSlice';


const store = configureStore({
  reducer: {
    modal: modalReducer,
    sideNav: sideNavReducer,
    user: userReducer,
  },
});

export default store;

