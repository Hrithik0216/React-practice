import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "../features/counter/CounterSlice";
import loginReducer from "../features/login/LoginSlice"
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user:  loginReducer
    }
})