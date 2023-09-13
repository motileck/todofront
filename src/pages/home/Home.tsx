import React from 'react';
import AuthService from "../../services/AuthService";
import {useNavigate} from "react-router-dom";
import routes from '../../config/router/routes.json'
import BackgroundLayer from "../../components/backgroundLayer/BackgroundLayer";
const Home = () => {

    const navigate = useNavigate();

    const logout = async () => {
        await AuthService.logout();
        await navigate(routes.login)
    }

    return (
        <div>
            <BackgroundLayer/>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;