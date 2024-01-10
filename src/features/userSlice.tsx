import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


interface UserState { 
    name: string,
    email : string
}
const initialState : UserState = {
    name: "",
    email : ""
}
export const userSlice:any = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state,action:PayloadAction<{name : string,email : string}>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer