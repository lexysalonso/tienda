import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {productsSlice} from "../features/Products/productSlice";

export const store = configureStore({
  reducer: {
    [productsSlice.reducerPath]: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsSlice.middleware),
});
setupListeners(store.dispatch);