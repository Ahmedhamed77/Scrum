import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';

export const server = {
  live: '',
};

const baseUrl = server.live;

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, {getState}) => {
    const startToken = (getState() as RootState).userAuth.authorizedUser;
    if (startToken) {
      headers.set('authorization', `Bearer ${startToken}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['API'],
  endpoints: _ => ({}),
});

export const authApi = baseApi.enhanceEndpoints({addTagTypes: ['auth']});
