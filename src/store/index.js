import { configureStore } from '@reduxjs/toolkit';
import {postsApi} from "./postsApi";

export default configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(postsApi.middleware)
    }
})