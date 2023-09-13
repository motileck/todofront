import React from 'react';
import './Diary.css'
import BackgroundLayer from "../../components/backgroundLayer/BackgroundLayer";
import DiaryView from "../../components/diaryComponents/diaryView/DiaryView";

const Diary = () => {

    return (
        <div>
            <BackgroundLayer/>
            <DiaryView/>
        </div>
    );
};

export default Diary;