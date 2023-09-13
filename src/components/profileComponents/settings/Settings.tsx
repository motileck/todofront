import React, {useState} from 'react';
import './Settings.css'
import {IUser} from "../../../models/IUser";
import DiaryService from "../../../services/DiaryService";
import routes from "../../../config/router/routes.json";
import UserUpdateService from "../../../services/UserUpdateService";
import {useUserId} from "../../../hooks/useUserId";

interface ISettings {
    visible: boolean,
    user: IUser,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<ISettings> = ({visible, user, setVisible}) => {
    const [userName, setUserName] = useState<string>(user.userName);
    const [email, setEmail] = useState<string>(user.email);
    const userid = useUserId();

    const updateUser = async () => {
        await UserUpdateService.updateUser(userid, userName, email);
        const newData = {userName, email};
        const mergedData = {...user, ...newData};
        localStorage.setItem("user", JSON.stringify(mergedData));
        setVisible(false);
    }

    return (
        <div>
            {visible &&
                <div className='wrap__settings'>
                    <div className='wrap__settings__data'>
                        <div onClick={() => setVisible(false)}>x</div>
                        <div className='settings__data'>
                            <span>UserName</span>
                            <input
                                type='text'
                                className='input__settings'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className='settings__data'>
                            <span>Email</span>
                            <input
                                type='text'
                                className='input__settings'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className='button__profile__settings' onClick={updateUser}>Save</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Settings;