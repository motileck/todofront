import React from 'react';
import './Loader.css'
import {BeatLoader} from "react-spinners";
const Loader = () => {
    return (
        <div>
            <div className='wrap__loader'><BeatLoader color="#36d7b7" /></div>
        </div>
    );
};

export default Loader;