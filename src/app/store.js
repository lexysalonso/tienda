import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist"
import { setupListeners } from "@reduxjs/toolkit/query";

import { productsApi} from "../features/Products/productApi";
import { userApi } from "../features/User/userApi";
import reducerCard from "../features/ShoppingCard/shoppingCardSlice";
import userSlice from "../features/User/userSlice";
import productSlice from "../features/Products/productSlice";

let persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};


const reducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  card: reducerCard,
  user: userSlice,
  product: productSlice,
});

const persistdReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
  reducer: persistdReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(productsApi.middleware, userApi.middleware),
});
setupListeners(store.dispatch);
