import React from 'react';
import './Header.css'
import {useUserName} from "../../../hooks/userUserName";
import {useDate} from "../../../hooks/useDate";
import * as headerImg from "../../../img/header/export/img";
const Header = () => {
    const userName = useUserName();
    const currentDate = useDate();
    return (
        <div className='header__wrap'>
            <div className='header__background'>
                <div className='headText__wrap'>
                    <span className='greetings__text'>Good Day, {userName}!</span>
                    <span className='date__text'>{currentDate}</span>
                </div>
                <div className='img__head__wrap'>
                    <img alt='notify' src={headerImg.notifications}/>
                    <img alt='profile' src={headerImg.logoProfile}/>
                </div>
            </div>
        </div>
    );
};

export default Header;