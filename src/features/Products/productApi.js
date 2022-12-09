import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "../../components/Toast";
import { addToProduct } from "./productSlice";


let API = process.env.REACT_APP_API;
//const API = "https://fakestoreapi.com/";
//const API = "https://reqres.in/api/";

export const productsApi = createApi({
  reducerPath: "Products",
  baseQuery: fetchBaseQuery({ baseUrl: API }),

  /*  refetchOnMountOrArgChange: false,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  pollingInterval: 3000, */

  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("SUCCESS OK RES", data);
          dispatch(addToProduct(data));
          } catch (error) {
          toast.Toast_Error(error.error.error);
        }
      },
    }),
    getProductsID: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getCategory: builder.query({
      query: () => ({
        url: "/products/categories",
      }),
    }),
    getCategoriexBYID: builder.query({
      query: (categorie) => ({
        url: `/products/category/${categorie}`,
      }),
    }),
    getProductCard: builder.query({
      query: (id) => ({
        url: `/carts/user/${id}`,
      }),
    }),
  }),
});

export const getProductCache = productsApi.endpoints.getProducts;

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetCategoryQuery,
  useGetCategoriexBYIDQuery,
  useLazyGetCategoriexBYIDQuery,
  useGetProductCardQuery,
  useLazyGetProductCardQuery,
} = productsApi;
