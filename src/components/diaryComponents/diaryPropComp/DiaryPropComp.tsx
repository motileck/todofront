import React from 'react';
import './DiaryPropComp.css'
import {useDateParse} from "../../../hooks/useDateParse";
import {Moment} from "moment";

interface IDiaryComp{
    item:{
        sysPressure:string,
        adPressure:string,
        date:Moment
        _id:string
    },
    index:number,
}

const DiaryPropComp: React.FC<IDiaryComp> = ({item, index}) => {
    const date = useDateParse(item.date)
    return (
        <div className='wrap__diaryComponentsProp'>
            <div className='wrap__diaryValueProp'>
                <span>{index+1}.</span>
                <div>
                    <span>sys: </span>
                    <span>{item.sysPressure}</span>
                </div>

                <div>
                    <span>ad: </span>
                    <span>{item.adPressure}</span>
                </div>

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

export default DiaryPropComp;