import {AuthResponse} from "../models/response/AuthResponse";
import Cookies from "js-cookie";

export const removeTokensStorage = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
}

export const saveToStorage = (data: AuthResponse) => {
    saveTokensToStorage(data);
    localStorage.setItem('user', JSON.stringify(data.user));
}

export const saveTokensToStorage = (data:AuthResponse) => {
    Cookies.set('accessToken', data.accessToken);
    Cookies.set('refreshToken', data.refreshToken);
}