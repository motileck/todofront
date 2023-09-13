import {Moment} from "moment";

export interface Diary{
    name:string,
    type:string,
    date:Moment,
    userid:string

}

export interface DiariesState{
    data: Diary[],
    status: Status
}

export interface CreateDiaryPayload {
    name:string,
    type:string,
    date:Moment,
    userid:string
}
export interface ParamsDiaryGet{
    userid:string
}


export enum Status{
    Loading = "loading",
    Success = "success",
    Error = "error"
}