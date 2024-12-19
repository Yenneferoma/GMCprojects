import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseUrl = process.env.REACT_APP_API_BASE_URL;

export const blogApis = createApi({
  reducerPath: "blogAPIs",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllBlogs: builder.mutation({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),

    getBlogsById: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBlogsMutation, useGetBlogsByIdMutation } = blogApis;
