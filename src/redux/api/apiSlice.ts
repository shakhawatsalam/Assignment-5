/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../../Types/globaltypes";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["SingleBooks", "reviews", "books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
      }),
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `/book/${id}`,
      }),
      providesTags: ["SingleBooks"],
    }),
    updateSingleBook: builder.mutation({
      query: (data: { id: string; data: Book }) => ({
        url: `/book/${data.id}`,
        method: "POST",
        body: data.data,
      }),
      invalidatesTags: ["SingleBooks"],
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
    }),
    removeBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    getComment: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ["reviews"],
    }),
    postReviews: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateSingleBookMutation,
  useGetCommentQuery,
  usePostReviewsMutation,
  usePostBookMutation,
  useRemoveBookMutation,
} = bookApi;
