import React from 'react';
import './DiaryComp.css'
import {useDateParse} from "../../../hooks/useDateParse";
import {Moment} from "moment";

interface IDiaryComp{
    index:number,
    item:{
        name:string,
        type:string,
        date:Moment,
        _id:string,
    }
}

const DiaryComp:React.FC<IDiaryComp> = ({item,index}) => {
    const date = useDateParse(item.date)
    return (
        <div className='wrap__diaryComponents'>
            <div className='wrap__diaryValue'>
                <span>{index+1}</span>
                <span>{item.name}</span>
                <span>{item.type}</span>
                <div className='wrap__date'>
                    <span style={{fontSize:'25px'}}>{date.day}</span>
                    <div className='wrap__date__month'>
                        <span>{date.month}</span>
                        <span>{date.time}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DiaryComp;