import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7777",
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
