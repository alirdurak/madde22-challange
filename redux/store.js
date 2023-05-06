import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./card-slice";

export const store = configureStore({
  reducer: {
    cardSlice,
  },
});
