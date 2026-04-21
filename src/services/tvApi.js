import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvApi = createApi({
  reducerPath: 'tvApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.tvmaze.com/',
  }),
  endpoints: (builder) => ({
    getShows: builder.query({
      query: (page = 0) => `shows?page=${page}`,
    }),
    searchShows: builder.query({
      query: (query) => `search/shows?q=${query}`,
    }),
    getShowById: builder.query({
      query: (id) => `shows/${id}`,
    }),
  }),
});

export const {
  useGetShowsQuery,
  useSearchShowsQuery,
  useGetShowByIdQuery,
} = tvApi;