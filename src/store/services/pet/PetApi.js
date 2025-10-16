import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rtdbBaseUrl = process.env.EXPO_PUBLIC_BASE_URL_RTDB;

export const PetApi = createApi({
    reducerPath: "PetApi",
    baseQuery: fetchBaseQuery({ baseUrl: rtdbBaseUrl }),
    endpoints: (builder) => ({
        getPets: builder.query({
            query: (type) => `pets.json?orderBy="type"&equalTo="${type}"`,
            transformResponse: (response) => {
                return Object.values(response);
            }
        })
    }),
});

export const { useGetPetsQuery } = PetApi;