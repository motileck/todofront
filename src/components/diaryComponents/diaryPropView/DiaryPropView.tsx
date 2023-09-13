import React, {useEffect} from 'react';
import './DiaryPropView.css'
import {useNavigate} from "react-router-dom";
import routes from '../../../config/router/routes.json';
import {useSelector} from "react-redux";
import DiaryPropComp from "../diaryPropComp/DiaryPropComp";
import {useAppDispatch} from "../../../store/store";
import {getAllDiariesProp} from "../../../store/diaryProp/actions";
import DiariesPropService from "../../../services/DiariesPropService";
import {IItemDiaryProp} from "../../../models/IItemDiary";
import DiaryService from "../../../services/DiaryService";
interface StateData {
    diaryPropSlice: {
        data: []
    }
}

interface StateDiaryId {
    takeIdSlice: {
        diaryId:string
    }
}

const DiaryPropView = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const dataDiaryProp = useSelector((state: StateData) => state.diaryPropSlice.data)
    const diaryId = useSelector((state:StateDiaryId) => state.takeIdSlice.diaryId)
    useEffect(() => {
        if (diaryId) {
            dispatch(getAllDiariesProp({diaryId: diaryId}))
        }
    }, [diaryId])

    const deleteProp = async (item : IItemDiaryProp) => {
        console.log(typeof item._id);
        await DiariesPropService.deletePropDiary(item._id);
        dispatch(getAllDiariesProp({diaryId: diaryId}));
    }

    const deleteDiary = async () => {
        await DiaryService.deleteDiary(diaryId);
        navigate(routes.diary);
    }

    return (
        <div className='wrap__diaryProp'>
            <div className='wrap__buttons__diaryProp'>
                <button className='button__diary__prop'
                        onClick={() => navigate(routes.createPropDiary)}>
                    <span>Create Record</span>
                </button>
                <button className='button__diary__prop'
                        onClick={() => deleteDiary()}>
                    <span>Delete Diary</span>
                </button>
            </div>

            <div>
                {dataDiaryProp.map((item: IItemDiaryProp, index: number) => (
                    <div key={index}>
                        <button className='button__diary__prop' onClick={()=> deleteProp(item)}>
                            <span>Delete</span>
                        </button>
                        <DiaryPropComp item={item} index={index}/>
                    </div>

                ))}

            </div>
            <button className='button__diary__prop' onClick={() => navigate(routes.diary)}>
                <span>Back</span>
            </button>
        </div>
    );
};


export default DiaryPropView;