import {IAuthSlice, Status} from "../../models/IAuthSlice";
import {createSlice} from "@reduxjs/toolkit";
import {login, register} from "./actions";


const initialState : IAuthSlice = {
    status: Status.Loading,
    data: {
        accessToken: '',
        refreshToken: '',
        user: {
            email:'',
            isActivated:false,
            id:'',
            userName:''
        }
    },
    isUserLogin:false,
}

const userSlice = createSlice({
    name:'api',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled,
            (state, {payload}) => {
                state.status = Status.Success;
                state.data = payload;
            });
        builder.addCase(register.rejected,
            (state) => {
                state.status = Status.Error;
            });
        builder.addCase(register.pending,
            (state) => {
                state.status = Status.Loading;
            });
        builder.addCase(login.fulfilled,
            (state, {payload}) => {
                state.status = Status.Success;
            });
        builder.addCase(login.rejected,
            (state) => {
                state.status = Status.Error;
            });
        builder.addCase(login.pending,
            (state) => {
                state.status = Status.Loading;
            });
    }
})

export default userSlice.reducer;