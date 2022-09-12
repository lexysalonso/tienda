import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://reqres.in/api/";

export const productsSlice = createApi({
  reducerPath: "Products1",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getPdroducts: builder.query({
      query: () => "/users?page=2",
    }),
  }),
});

export const { useGetPdroductsQuery } = productsSlice;
