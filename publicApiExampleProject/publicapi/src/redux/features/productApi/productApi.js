import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1" }),

  endpoints: (builder) => ({
    getPublicRandomProducts: builder.query({
      query: ({page, limit}) => ({
        url: `/public/randomproducts?page=${page}&limit=${limit}`,
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    getPublicRandomSingleProduct: builder.query({
      query: (id) => ({
        url: `/public/randomproducts/${id}`,
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    getPublicRandomProduct: builder.query({
      query: ()=>({
        url: `/public/randomproducts/product/random`,
        method: 'GET',
        headers:{
          Accept: 'applicaton/json'
        }
      })
    })

  }),
});

export const {
useGetPublicRandomProductsQuery,
useGetPublicRandomSingleProductQuery,
useGetPublicRandomProductQuery
} = productApi;
