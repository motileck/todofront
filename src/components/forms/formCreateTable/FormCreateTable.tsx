import React, {useState} from 'react';
import './FormCreateTable.css'
import moment, {Moment} from "moment";
import {useNavigate} from "react-router-dom";
import routes from '../../../config/router/routes.json'
const FormCreateTable = () => {

    const [type, setType] = useState<string>();
    const [date, setDate] = useState<Moment>(moment());
    const formattedDate = date.format("YYYY-MM-DDTHH:mm");
    const navigate = useNavigate();
    return (
        <div className='wrap__analysis__form'>
            <div className='wrap__analysis__data'>
                <select className='select__type'
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                    <option disabled value="">Select Type</option>
                    <option value="Blood Analysis">Blood Analysis</option>
                    <option value="Urine Analysis">Urine Analysis</option>
                </select>
                <input value={formattedDate}
                       onChange={(e) => setDate(moment(e.target.value))}
                       type='datetime-local'/>

            </div>
            <button onClick={() => navigate(routes.createTable)}>
                <span>Create Table</span>
            </button>
        </div>
    );
};

export default FormCreateTable;