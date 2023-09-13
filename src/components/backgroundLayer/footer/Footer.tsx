import React from 'react';
import './Footer.css';
import * as footerImg from "../../../img/footer/export/img"
import {useLocation, useNavigate} from "react-router-dom";
import routes from '../../../config/router/routes.json'

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(typeof location.pathname)


    return (
        <footer className='footer__wrap'>
            <div className='img__wrap'>
                {location.pathname === '/home' ? <img
                    onClick={() => navigate(routes.home)}
                    alt='home'
                    className='icons' src={footerImg.researchBlue}
                /> : <img
                    onClick={() => navigate(routes.home)}
                    alt='home'
                    className='icons' src={footerImg.research}
                />}
                <span>Home</span>
            </div>

            <div className='img__wrap'>
                {location.pathname === '/diary' ? <img
                        alt='diary'
                        onClick={() => navigate(routes.diary)}
                        className='icons'
                        src={footerImg.diaryBlue}/>
                    : <img
                        alt='diary'
                        onClick={() => navigate(routes.diary)}
                        className='icons'
                        src={footerImg.diary}/>}
                <span>Diary</span>
            </div>
            <div className='img__wrap'>
                {location.pathname === '/doctors' ? <img
                    alt='doctors'
                    className='icons'
                    src={footerImg.doctorsBlue}
                /> : <img
                    alt='doctors'
                    className='icons'
                    src={footerImg.doctors}
                />}
                <span>Doctors</span>
            </div>
            <div className='img__wrap'>
                {location.pathname === '/analysis' ? <img
                    onClick={() => navigate(routes.analysis)}
                    alt='analysis'
                    className='icons'
                    src={footerImg.analysisBlue}
                /> : <img
                    onClick={() => navigate(routes.analysis)}
                    alt='analysis'
                    className='icons'
                    src={footerImg.analysis}
                />}
                <span>Analysis</span>
            </div>
            <div className='img__wrap'>
                {location.pathname === '/profile' ? <img
                    onClick={() => navigate(routes.profile)}
                    alt='profile'
                    className='icons'
                    src={footerImg.profileBlue}
                /> : <img
                    onClick={() => navigate(routes.profile)}
                    alt='profile'
                    className='icons'
                    src={footerImg.profile}
                />}
                <span>Profile</span>
            </div>

        </footer>
    );
};

export default Footer;