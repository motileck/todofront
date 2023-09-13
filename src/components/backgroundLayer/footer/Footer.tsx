import React from 'react';
import './Footer.css';
import * as footerImg from "../../../img/footer/export/img"
import {useNavigate} from "react-router-dom";
import routes from '../../../config/router/routes.json'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer__wrap'>
            <div className='img__wrap'>
                <img
                    onClick={()=> navigate(routes.home)}
                    alt='research'
                    className='icons' src={footerImg.research}
                />
                <span>Home</span>
            </div>

            <div className='img__wrap'>
                <img
                    alt='diary'
                    onClick={() => navigate(routes.diary)}
                    className='icons'
                    src={footerImg.diary}/>
                <span>Diary</span>
            </div>
            <div className='img__wrap'>
                <img
                    alt='doctors'
                    className='icons'
                    src={footerImg.doctors}
                />
                <span>Doctors</span>
            </div>
            <div className='img__wrap'>
                <img
                    alt='analysis'
                    className='icons'
                    src={footerImg.analysis}
                />
                <span>Analysis</span>
            </div>
            <div className='img__wrap'>
                <img
                    alt='profile'
                    className='icons'
                    src={footerImg.profile}
                />
                <span>Profile</span>
            </div>

        </div>
    );
};

export default Footer;