import React, {useState} from 'react';
import './FormDiaryProp.css'
import {useNavigate} from "react-router-dom";
import routes from '../../../config/router/routes.json'
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../store/store";
import {createDiariesProp} from "../../../store/diaryProp/actions";
import {createBrowserHistory} from "history";
import {DiaryProp} from "../../../models/response/DiaryPropResponse";
import moment, {Moment} from "moment";

interface StatusState{
    diaryPropSlice: {
        status:string
    }
}

interface StateDiaryId{
    takeIdSlice:{
        diaryId:string
    }

}
const FormCreateDiaryProp = () => {
    const [sysPressure, setSysPressure] = useState<string>('');
    const [adPressure, setAdPressure] = useState<string>('');
    const [date, setDate] = useState<Moment>(moment());
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const diaryId = useSelector((state : StateDiaryId) => state.takeIdSlice.diaryId);
    const dataStatus = useSelector((state:StatusState) => state.diaryPropSlice.status);
    const history = createBrowserHistory();
    const maxlength:number=3;
    const formattedDate = date.format("YYYY-MM-DDTHH:mm");

    const createDiary = async ()=>{
        console.log(date)
        console.log(dataStatus)
        console.log(`diary id ${diaryId}`)
        await dispatch(createDiariesProp({
            date: date,
            sysPressure: sysPressure,
            adPressure: adPressure,
            diaryId: diaryId
        } as DiaryProp))
        if(dataStatus === 'success'){
            navigate(routes.diariesProp)
        }

    }
    return (
        <div className="wrap__form__diaryProp">
            <span>Заполните данные</span>
            <div className='wrap_inputsDiaryProps'>
                <input maxLength={maxlength} onChange={(e) => setSysPressure(e.target.value)}
                       type='text' placeholder='SysPressure'/>
                <input maxLength={maxlength} onChange={(e) => setAdPressure(e.target.value)}
                       type='text' placeholder='AdPressure'/>
                <input value={formattedDate}
                       onChange={(e) => setDate(moment(e.target.value))}
                       type='datetime-local' placeholder='Date'/>
            </div>

            <button className='button__diaryProp' onClick={createDiary}>
                <span>Create record</span>
            </button>
            <button className='button__diaryProp' onClick={() => history.back()}>
                <span>Back</span>
            </button>
        </div>
    );
};

export default FormCreateDiaryProp;