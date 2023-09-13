import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {removeTokensStorage} from "./auth.helper";

export default class AuthService{
    static async login(email:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('api/login', {email, password})
    }

    static async registration(email:string, password:string, userName:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/registration', {email, password, userName})
    }
    static async logout(): Promise<void> {
        removeTokensStorage();
        localStorage.removeItem('user');
    }

}
