
import {createSlice} from "@reduxjs/toolkit";
import {createDiariesProp, getAllDiariesProp} from "./actions";
import {DiariesPropState, Status} from "../../models/response/DiaryPropResponse";


const initialState:DiariesPropState = {
    status:Status.Loading,
    data: []
}

const diaryPropSlice = createSlice({
    name:'diaryProp',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(createDiariesProp.fulfilled,
            (state, {payload}) => {
                state.status = Status.Success;
                state.data.push(payload);
            });
        builder.addCase(createDiariesProp.rejected,
            (state) => {
                state.status = Status.Error;
            });
        builder.addCase(createDiariesProp.pending,
            (state) => {
                state.status = Status.Loading;
            });
        builder.addCase(getAllDiariesProp.fulfilled,
            (state, {payload}) => {
                state.data = payload;
                state.status = Status.Success;
                console.log(payload)
            });
        builder.addCase(getAllDiariesProp.rejected,
            (state) => {
                state.status = Status.Error;
            });
        builder.addCase(getAllDiariesProp.pending,
            (state) => {
                state.status = Status.Loading;
            });

    }

})

export default diaryPropSlice.reducer;