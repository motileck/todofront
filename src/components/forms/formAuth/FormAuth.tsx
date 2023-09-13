import React from 'react';
import './FormAuth.css'
import {useNavigate} from "react-router-dom";

interface IFormAuth {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    auth: Function;
    textButton: string;
    route: string
}

const FormAuth: React.FC<IFormAuth> = ({setUserName, setEmail, setPassword, auth, textButton, route}) => {

    const navigate = useNavigate();
    let textAuth = textButton === "Sign In" ? "Dont, have an account?" : "Already a user?";
    let textSign = textButton === "Sign In" ? "Sign Up":"Sign In";

    return (
        <div className='wrap__auth'>
            <span className="welcome__text">Welcome</span>
            <form className='wrap__inputs'>
                {textButton === "Sign Up" &&
                    <input
                        className='input'
                        onChange={e => setUserName(e.target.value)}
                        type='text'
                        placeholder='Enter your Name'
                    />
                }

                <input
                    className='input'
                    onChange={e => setEmail(e.target.value)}
                    type='text'
                    placeholder='Enter your Email'
                />

                <input
                    className='input'
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password'
                />
            </form>
            <div className='wrap__buttons'>

                <button className='button__auth' onClick={() => auth()}>
                    <span className="text__button">{textButton}</span>
                </button>

                    <div>
                        <span className="text__auth">{textAuth} </span>
                        <span className="text__sign" onClick={() => navigate(route)}>{textSign}</span>
                    </div>
            </div>


        </div>
    );
};

export default FormAuth;