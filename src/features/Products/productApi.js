import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "../../components/Toast/Toast";
let API = process.env.REACT_APP_API 
//const API = "https://fakestoreapi.com/";
//const API = "https://reqres.in/api/";

export const productsApi = createApi({
  reducerPath: "Products",
  baseQuery: fetchBaseQuery({ baseUrl:API }),

 /*  refetchOnMountOrArgChange: false,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  pollingInterval: 3000, */

  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          console.log("Sucess pending prodcuts");
          const { data } = await queryFulfilled;
          console.log("Sucess o", data);
          toast.Toast_Success("Los Productos se han cargado correctamente");
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
  }),
});

export const { useGetProductsQuery } = productsApi;
