import { createSlice } from "@reduxjs/toolkit";


const initialState: boolean = true;
const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggle: (state) => {
            state = !state
            return state;
        }
    }
})


export const { toggle } = toggleSlice.actions;

export default toggleSlice.reducer;
