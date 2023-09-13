import {createAsyncThunk} from "@reduxjs/toolkit";
import {CreateDiaryPayload, Diary, ParamsDiaryGet} from "../../models/response/DiaryResponse";
import DiaryService from "../../services/DiaryService";

export const createDiary = createAsyncThunk<CreateDiaryPayload, Diary>
('api/createDiary',
    async (authData) => {
        const {data} = await DiaryService.createDiary(authData.date, authData.name, authData.type, authData.userid);
        return data;
    });

export const getAllDiaries = createAsyncThunk<Diary[], ParamsDiaryGet>(
    'api/getAllDiariesProp',
    async (params) => {
        const response = await DiaryService.getAllDiaries(params.userid);
        return response.data;
    }
);