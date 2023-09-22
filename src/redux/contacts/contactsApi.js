import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://650d5770a8b42265ec2c0b7e.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: buider => ({
    getContacts: buider.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addContact: buider.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: buider.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation} = contactsApi;