import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../features/toggleSlice";


const store = configureStore({
    reducer: {
        toggleTheme : toggleSlice
    }
})


export default store;