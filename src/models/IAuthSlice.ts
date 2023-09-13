import {AuthResponse} from "./response/AuthResponse";

export interface IAuthSlice{
    status: Status;
    data: AuthResponse;
    isUserLogin:boolean,
}

export enum Status{
    Loading = "loading",
    Success = "success",
    Error = "error"
}
