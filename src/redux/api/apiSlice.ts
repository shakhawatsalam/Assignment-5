/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../../Types/globaltypes";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["books"],
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
      providesTags: ["books"],
    }),
    updateSingleBook: builder.mutation({
      query: (data: { id: string; data: Book }) => ({
        url: `/book/${data.id}`,
        method: "POST",
        body: data.data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateSingleBookMutation,
} = bookApi;
