import { createSlice } from "@reduxjs/toolkit";

export const loginslice = createSlice({
    name: "user",
    initialState: {
        value: { name: "", mail: "", age:0}
    },
    reducers: {
        changeDetails: (state, action) => {
            state.value = action.payload
        },
        backToNormal:(state,action)=>{
            state.value =  {
                value: { name: "", mail: "", age:0}
            }
        }
    }
})

export const {changeDetails, backToNormal} = loginslice.actions
export default loginslice.reducer