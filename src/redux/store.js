import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
