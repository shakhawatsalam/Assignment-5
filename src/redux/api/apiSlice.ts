/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-5-server-three.vercel.app/",
  }),
  tagTypes: ["SingleBooks", "reviews", "books", "user"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (url) => ({
        url: url,
      }),
      providesTags: ["books"],
    }),
    getSearchTermBooks: builder.query({
      query: (searchTerm) => ({
        url: `/books?/searchTerm=${searchTerm}`,
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
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SingleBooks"],
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
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
    createUser: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: (email) => ({
        url: `/users/${email}`,
      }),
      providesTags: ["user"],
    }),
    addToWishList: builder.mutation({
      query: ({ email, data }) => ({
        url: `/wishlist/${email}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    addToReadingList: builder.mutation({
      query: ({ email, data }) => ({
        url: `/readinglist/${email}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
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
  useGetSearchTermBooksQuery,
  useCreateUserMutation,
  useAddToWishListMutation,
  useAddToReadingListMutation,
  useGetUserQuery,
} = bookApi;
