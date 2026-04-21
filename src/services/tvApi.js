import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvApi = createApi({
  reducerPath: 'tvApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.tvmaze.com/',
  }),
  endpoints: (builder) => ({
    searchShows: builder.query({
      query: (query = 'all') => `search/shows?q=${query}`,
    }),
    getShowById: builder.query({
      query: (id) => `shows/${id}`,
    }),
  }),
});

export const {
  useSearchShowsQuery,
  useGetShowByIdQuery,
} = tvApi;