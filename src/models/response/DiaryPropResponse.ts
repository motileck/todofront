import {Moment} from "moment";

export interface DiaryProp{
    sysPressure:string,
    adPressure:string,
    date:Moment,
    diaryId:string

}

export interface DiariesPropState{
    data: DiaryProp[],
    status: Status
}

export interface CreateDiaryPropPayload {
    sysPressure:string,
    adPressure:string,
    date:Moment,
    diaryId:string
}
 export interface ParamsDiaryPropGet{
     diaryId:string
 }


export enum Status{
    Loading = "loading",
    Success = "success",
    Error = "error"
}