import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalSlice/modalSlice';


const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;

