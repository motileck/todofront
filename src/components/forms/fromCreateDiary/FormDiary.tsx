import React, {useState} from 'react';
import './FormDiary.css'
import {useNavigate} from "react-router-dom";
import routes from '../../../config/router/routes.json'
import {useSelector} from "react-redux";
import {useUserId} from "../../../hooks/useUserId";
import {useAppDispatch} from "../../../store/store";
import {createDiary} from "../../../store/diary/actions";
import {createBrowserHistory} from "history";
import {Diary} from "../../../models/response/DiaryResponse";
import moment, {Moment} from "moment";

interface StatusState {
    diarySlice: {
        status: string
    }
}

const FormCreateDiary = () => {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [date, setDate] = useState<Moment>(moment());
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userId = useUserId();
    const dataStatus = useSelector((state: StatusState) => state.diarySlice.status);
    const history = createBrowserHistory();
    const formattedDate = date.format("YYYY-MM-DDTHH:mm");
    const createDiaryFunc = async () => {
        await dispatch(createDiary({date: date, name: name, type: type, userid: userId} as Diary))
        if (dataStatus === 'success') {
            navigate(routes.diary)
        }

    }
    return (
        <div className="wrap__form-diary">
            <span>Заполните данные</span>
            <div className='wrap__inputsDiary'>

                <select className='select__type'
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                    <option disabled value="">Select Type</option>
                    <option value="Blood pressure diary">Blood pressure diary</option>
                    <option value="Weight diary">Weight diary</option>
                </select>

                <input onChange={(e) => setName(e.target.value)}
                       type='text' placeholder='Diary Name'/>

                <input value={formattedDate}
                       onChange={(e) => setDate(moment(e.target.value))}
                       type='datetime-local'/>
            </div>

            <button className='button__diary' onClick={createDiaryFunc}>
                <span>Create Diary</span>
            </button>
            <button className='button__diary' onClick={() => history.back()}>
                <span>Back</span>
            </button>
        </div>
    );
};

export default FormCreateDiary;