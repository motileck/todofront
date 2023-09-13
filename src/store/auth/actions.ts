import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import {AuthResponse, LogModal, RegModal} from "../../models/response/AuthResponse";
import {saveToStorage} from "../../services/auth.helper";


export const register = createAsyncThunk<AuthResponse, RegModal>
('api/registration',
    async (authData)=>  {
    const {email,password, userName} = authData;
    const {data} = await AuthService.registration(email,password, userName);

    return data;
    });

export const login = createAsyncThunk<AuthResponse, LogModal>
('api/login',
    async ({email,password})=>  {

        const {data} = await AuthService.login(email,password);
        if(data.accessToken){
           saveToStorage(data);
        }
        return data;
    });
