
import {createSlice} from "@reduxjs/toolkit";
import {DiariesState, Status} from "../../models/response/DiaryResponse";
import {createDiary, getAllDiaries} from "./actions";


const initialState:DiariesState = {
    status:Status.Loading,
    data: []
}

const diarySlice = createSlice({
    name:'diary',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(createDiary.fulfilled,
            (state, {payload}) => {
                state.status = Status.Success;
                state.data.push(payload);
            });
        builder.addCase(createDiary.rejected,
            (state) => {
                state.status = Status.Error;
            });
        builder.addCase(createDiary.pending,
            (state) => {
                state.status = Status.Loading;
            });
        builder.addCase(getAllDiaries.fulfilled,
            (state, {payload}) => {
                state.data = payload;
                state.status = Status.Success;
                console.log(payload)
            });
        builder.addCase(getAllDiaries.rejected,
            (state) => {
                state.status = Status.Error;
            });
        builder.addCase(getAllDiaries.pending,
            (state) => {
                state.status = Status.Loading;
            });

    }

})

export default diarySlice.reducer;