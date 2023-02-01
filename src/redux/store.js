import { configureStore } from "@reduxjs/toolkit";
import { authSlice, authReducer } from "./auth/authReducer";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authReducer,
  },
  devTools: true,
});
