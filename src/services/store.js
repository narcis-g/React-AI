import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { articleApi } from './article'

// configure store redux doc 
export const store =configureStore({
    reducer: {
        [articleApi.reducerPath]:articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat()
})
