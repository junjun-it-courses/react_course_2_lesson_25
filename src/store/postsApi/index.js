import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../utils/API_CONFIG';


export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),

    endpoints: (build) => ({
        getPosts: build.query({
            query: (limit) => `posts?_limit=${limit}`
        }),

        getPostById: build.query({
            query: (postId= 1) => `posts/${postId}`
        }),

        createPost: build.mutation({
            query: (body) => ({
                url: 'posts',
                method: 'POST',
                body
            })
        })
    })
});


export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = postsApi;