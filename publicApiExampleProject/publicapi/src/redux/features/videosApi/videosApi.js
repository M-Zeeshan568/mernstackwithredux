import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const videosApi = createApi({
  reducerPath: "videosapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1" }),

  endpoints: (builder) => ({
    getPublicYoutubeVideos: builder.query({
      query: () => ({
        url: `/public/youtube/videos/EQwmQLU1S6I`,
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    // getPublicRandomSingleUser: builder.query({
    //   query: (id) => ({
    //     url: `/public/randomusers/${id}`,
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   }),
    // }),

    // getPublicRandomUser: builder.query({
    //   query: ()=>({
    //     url: `/public/randomusers/user/random`,
    //     method: 'GET',
    //     headers:{
    //       Accept: 'applicaton/json'
    //     }
    //   })
    // })

  }),
});

export const {
    useGetPublicYoutubeVideosQuery,

} = videosApi;
