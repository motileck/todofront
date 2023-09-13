import {AxiosResponse} from "axios";
import $api from "../http";
import {Diary} from "../models/response/DiaryResponse";
import moment from "moment";


export default class DiaryService{
    static async createDiary(date: moment.Moment, name: string, type: string, userid: string): Promise<AxiosResponse<Diary>>{
        return $api.post<Diary>('api/createDiary', {date, name, type, userid});
    }
    static async getAllDiaries(userid : string): Promise<AxiosResponse<Diary[]>>{
        return $api.get<Diary[]>('api/getAllDiaries', {params: {userid:userid}});
    }

    static async deleteDiary(diaryId : string){
        return $api.delete(`/api/deleteDiary/${diaryId}`)
    }

}