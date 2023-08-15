import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// https://rapidapi.com/restyler/api/article-extractor-and-summarizer link for the api
export const articleApi = createApi ({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    endpoints:(builder) => ({
        getSummary: builder.query({
            query: (params) => 'test'
        })
    })

});