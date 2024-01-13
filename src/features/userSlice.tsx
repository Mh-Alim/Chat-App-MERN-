import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface UserState { 
    _id : string,
    name: string,
    email : string
}
const initialState: UserState = {
    _id : "",
    name: "",
    email : ""
}
export const userSlice:any = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state,action:PayloadAction<{_id : string,name : string,email : string}>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer