import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// https://rapidapi.com/restyler/api/article-extractor-and-summarizer link for the api

const rapidApiKey= import.meta.env.VITE_RAPID_API_ARTICLE_KEY

export const articleApi = createApi ({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey)
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')

        }
    }),
    endpoints:(builder) => ({
        getSummary: builder.query({
            query: (params) => 'test'
        })
    })

});