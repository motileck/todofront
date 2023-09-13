import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import userSlice from './auth/userSlice';
import diaryPropSlice from "./diaryProp/diaryPropSlice";
import diarySlice from "./diary/diarySlice";
import takeIdSlice from "./takeId/takeIdSlice";

export const store = configureStore({
    reducer: {
        userSlice,
        diaryPropSlice,
        diarySlice,
        takeIdSlice
    }
})

type appDispatch = typeof store.dispatch;
export const useAppDispatch = ()=> useDispatch<appDispatch>();
export type TypeRootState = ReturnType<typeof store.getState>;