import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./reduser/reduser";

export const store = configureStore({
  reducer: {
    products: postSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
