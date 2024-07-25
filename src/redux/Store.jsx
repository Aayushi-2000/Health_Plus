import productSlice from "./Slices/Product";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: productSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
