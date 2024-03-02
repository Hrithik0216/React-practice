import { createSlice } from "@reduxjs/toolkit";

 const personSlice = createSlice({
    name: "Auth",
    initialState: {
        name: "Hrithik",
        role: "developer",
        isAuthenticate: false,
        email: "hrithik@gmail.com"
    },
    reducers: {
        userUpdate: (state, action) => {
            if(action.payload.type ==="nameChange"){
                state.name = action.payload.name
            }
        },
        mailUpdate: (state,action)=>{
            if(action.payload.type==="mailChange"){
                state.email = action.payload.email
            }
        }
    }
});

export const { userUpdate,mailUpdate } = personSlice.actions;

export default personSlice.reducer