import {AxiosResponse} from "axios";
import $api from "../http";
import {DiaryProp} from "../models/response/DiaryPropResponse";
import moment from "moment";

export default class DiariesPropService {
    static async createPropDiary(date: moment.Moment, sysPressure: string, adPressure: string, diaryId: string): Promise<AxiosResponse<DiaryProp>>{
        return $api.post<DiaryProp>('api/createDiaryProp', {date, sysPressure, adPressure, diaryId});
    }

    static async getAllPropDiaries(diaryId : string): Promise<any>{
        return $api.get<DiaryProp[]>('api/getAllDiariesProp', {params: {diaryId:diaryId}});
    }

    static async deletePropDiary(diaryPropId:string){
        return $api.delete(`api/deleteDiaryProp/${diaryPropId}`)
    }
}