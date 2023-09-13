import React, {useEffect} from 'react';
import './DiaryView.css'
import {useNavigate} from "react-router-dom";
import routes from '../../../config/router/routes.json';
import {useUserId} from "../../../hooks/useUserId";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../store/store";
import DiaryComp from "../diaryComp/DiaryComp";
import {getAllDiaries} from "../../../store/diary/actions";
import {setDiaryId} from "../../../store/takeId/takeIdSlice";
import {IItemDiary} from "../../../models/IItemDiary";

interface StateData {
    diarySlice: {
        data: []
    }
}


const DiaryView = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userId = useUserId();
    const dataD = useSelector((state: StateData) => state.diarySlice.data);
    let diaryId;
    const takeDiaryId = (item : IItemDiary) => {
        diaryId = item._id
        dispatch((setDiaryId(diaryId)));
        console.log(diaryId)
        navigate(routes.diariesProp);
    }

    useEffect(() => {
        if (userId) {
            dispatch(getAllDiaries({userid: userId}))
        }
    }, [userId, dispatch])

    return (
        <div className='wrap__diary__view'>

            <button className='button__createDiary' onClick={() => navigate(routes.createDiary)}>
                <span>Create Diary</span>
            </button>

            <div className='wrap__diaryComp' style={{paddingBottom: '80px'}}>

                {dataD.map((item: IItemDiary, index: number) => (
                    <div key={index} onClick={() => takeDiaryId(item)}>
                        <DiaryComp key={index} item={item} index={index}/>
                    </div>

                ))}
            </div>

        </div>
    );
};

export default DiaryView;