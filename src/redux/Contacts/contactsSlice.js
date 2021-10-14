import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61685a86ba841a001727c72d.mockapi.io/api/v1",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    createContact: builder.mutation({
      query: (contactData) => ({
        url: "/contacts",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
