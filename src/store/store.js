import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/slice";

export const store = configureStore({
  reducer: {
    UserReducer,
  },
});
