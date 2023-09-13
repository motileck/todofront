import React, {useState} from 'react';
import FormAuth from "../../components/forms/formAuth/FormAuth";
import {useNavigate} from 'react-router-dom';
import routes from "../../config/router/routes.json"
import {useActions} from "../../hooks/useActions";
import Cookies from "js-cookie";
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('')
    const {login} = useActions();
    const navigate = useNavigate();

    const checkLogin = async () => {
        if(Cookies.get('accessToken')){
            navigate(routes.home);
        } else {
            navigate(routes.login);
        }
    }

    const loginAccount = async () => {
        await login({email:email, password:password});
        await checkLogin();
    }


    return (
        <div className='wrap__auth__page'>
            <FormAuth
                setUserName={setUserName}
                setEmail={setEmail}
                setPassword={setPassword}
                auth={loginAccount}
                textButton='Sign In'
                route={routes.register}
            />

        </div>


    );
};

export default Login;