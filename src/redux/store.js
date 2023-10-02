import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slice/TodoSlice";

const reducer = {
  todo: TodoSlice.reducer,
  // Add other reducers if you have any
};

export const store = configureStore({
  reducer: reducer,
});