import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://fakestoreapi.com/"
//const API = "https://reqres.in/api/";

export const productsSlice = createApi({
  reducerPath: "Products1",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getPdroducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetPdroductsQuery } = productsSlice;
