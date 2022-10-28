import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi} from "../features/Products/productApi";
import { userApi } from "../features/User/userApi";
import reducerCard from "../features/ShoppingCard/shoppingCardSlice";
import userSlice from "../features/User/userSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    card: reducerCard,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, userApi.middleware),
});
setupListeners(store.dispatch);
