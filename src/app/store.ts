import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../features/toggleSlice";
import userSlice from "../features/userSlice";
import refreshSlice from "../features/refreshSlice";


const store = configureStore({
    reducer: {
        toggleTheme: toggleSlice,
        user: userSlice,
        sidebarRefresh : refreshSlice
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;