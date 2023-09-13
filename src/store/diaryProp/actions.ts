import {createAsyncThunk} from "@reduxjs/toolkit";
import DiariesPropService from "../../services/DiariesPropService";
import {CreateDiaryPropPayload, DiaryProp, ParamsDiaryPropGet} from "../../models/response/DiaryPropResponse";


export const createDiariesProp = createAsyncThunk<CreateDiaryPropPayload, DiaryProp>
('api/createDiaryProp',
    async (authData) => {
        const {data} = await DiariesPropService.createPropDiary(authData.date, authData.sysPressure, authData.adPressure, authData.diaryId);
        return data;
    });

export const getAllDiariesProp = createAsyncThunk<DiaryProp[], ParamsDiaryPropGet>(
    'api/getAllDiariesProp',
    async (params) => {
        const response = await DiariesPropService.getAllPropDiaries(params.diaryId);
        return response.data;
    }
);

export const deleteDiaryProp = createAsyncThunk(
    'api/deleteDiaryProp',
    async (params) => {
        // @ts-ignore
        const response = await DiariesPropService.deletePropDiary(params.diaryId);
        return response;
    }
)