import {IUser} from "../IUser";

export interface AuthResponse {
    accessToken : string;
    refreshToken:string;
    user:IUser;
}

export interface RegModal {
    email:string,
    password:string
    userName:string
}

export interface LogModal {
    email:string,
    password:string
}

