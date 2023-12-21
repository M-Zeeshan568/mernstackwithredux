import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const publicApi = createApi({
  reducerPath: "publicapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1" }),

  endpoints: (builder) => ({
    getPublicRandomUsers: builder.query({
      query: ({ page, limit }) => ({
        url: `/public/randomusers?page=${page}&limit=${limit}`,
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    getPublicRandomSingleUser: builder.query({
      query: (id) => ({
        url: `/public/randomusers/${id}`,
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    getPublicRandomUser: builder.query({
      query: ()=>({
        url: `/public/randomusers/user/random`,
        method: 'GET',
        headers:{
          Accept: 'applicaton/json'
        }
      })
    })

  }),
});

export const {
  useGetPublicRandomUsersQuery,
  useGetPublicRandomSingleUserQuery,
  useGetPublicRandomUserQuery
} = publicApi;
