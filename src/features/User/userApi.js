//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loginUser } from "./userSlice";

import toast from "../../components/Toast";
import jwt_decode from "jwt-decode";

//const API = "https://fakestoreapi.com/";
//const API = "https://fakestoreapi.com/";
let API = process.env.REACT_APP_API;
//const API = "https://reqres.in/api/";

export const userApi = createApi({
  reducerPath: "User",
  baseQuery: fetchBaseQuery({ baseUrl: API }),

  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  pollingInterval: 3000,

  tagTypes: ["User"],

  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "post",
        body: user,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          console.log("Sucess pending");
          const { data } = await queryFulfilled;
          console.log("Sucess ok", data);
          dispatch(loginUser(jwt_decode(data?.token)));
          toast.Toast_Success("El usuario se logueado correctamente");
        } catch (error) {
          console.log("ver error login", error);
          toast.Toast_Error(error.error.data);
        }
      },
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});

export const { useUserLoginMutation, useLazyGetAllUserQuery } = userApi;
