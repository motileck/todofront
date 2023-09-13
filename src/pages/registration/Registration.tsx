import React, {useState} from 'react';
import './Registration.css'
import FormAuth from "../../components/forms/formAuth/FormAuth";
import {useNavigate} from "react-router-dom";
import routes from "../../config/router/routes.json"
import {useActions} from "../../hooks/useActions";
const Registration = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('')
    const {register} = useActions();
    const navigate = useNavigate();
    const registerAccount = async () => {
       await register({email:email, password:password, userName:userName});
       await navigate(routes.login);
    }
    return (
        <div className='wrap__auth__page'>
            <FormAuth
                setUserName={setUserName}
                setEmail={setEmail}
                setPassword={setPassword}
                auth={registerAccount}
                textButton='Sign Up'
                route={routes.login}
            />
        </div>

    );
};

export default Registration;