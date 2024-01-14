import { createSlice } from "@reduxjs/toolkit";


const initialState: boolean = true;
const refreshSidebarSlice = createSlice({
    name: "refreshSidebarSlice",
    initialState,
    reducers: {
        refreshFunction: (state) => {
            state = !state
            return state;
        }
    }
})


export const { refreshFunction } = refreshSidebarSlice.actions;

export default refreshSidebarSlice.reducer;
