import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { productsApi } from "../features/Products/productApi";
import { userApi } from "../features/User/userApi";
import reducerCard from "../features/ShoppingCard/shoppingCardSlice";
import userSlice from "../features/User/userSlice";
import productSlice from "../features/Products/productSlice";

let configPersist = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};

let reducers = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  card: reducerCard,
  user: userSlice,
  product: productSlice,
});

let persistdReducer = persistReducer(configPersist, reducers);

export const store = configureStore({
  reducer: persistdReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      productsApi.middleware,
      userApi.middleware
    ),
});
setupListeners(store.dispatch);
