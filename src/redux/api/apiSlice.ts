/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
      }),
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `/book/${id}`,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;
