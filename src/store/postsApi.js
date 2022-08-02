import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_BASE_URL, API_USER_ID, postMockData} from "../utils/api";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => 'posts',
        }),

        getPostById: build.query({
            query: (postId= 1) => `posts/${postId}`
        }),

        createPost: build.mutation({
            query: (data= postMockData) => ({
                url: 'posts',
                method: 'POST',
                body: {
                    title: data.title,
                    body: data.body,
                    userId: API_USER_ID,
                }
            })
        })
    })
})


export const {useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation} = postsAPI;
