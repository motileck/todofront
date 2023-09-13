import {Moment} from "moment";

export interface IItemDiary{
    name: string,
    date: Moment,
    type: string,
    _id: string
}

export interface IItemDiaryProp{
    sysPressure: string,
    adPressure: string,
    date: Moment,
    _id: string
}