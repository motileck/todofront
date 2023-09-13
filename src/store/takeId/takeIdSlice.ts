import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiaryState {
    diaryId: string | null;
}

const initialState: DiaryState = {
    diaryId: null,
};

const takeIdSlice = createSlice({
    name: "takeId",
    initialState,
    reducers: {
        setDiaryId: (state, action: PayloadAction<string>) => {
            state.diaryId = action.payload;
        },
    },
});

export const { setDiaryId } = takeIdSlice.actions;

export default takeIdSlice.reducer;