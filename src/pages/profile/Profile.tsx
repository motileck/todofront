import React, {useState} from 'react';
import './Profile.css'
import Settings from "../../components/profileComponents/settings/Settings";
import {useUser} from "../../hooks/useUser";
import Footer from "../../components/backgroundLayer/footer/Footer";


const Profile = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const user = useUser();
    if(!user){
        return <span>User undefined</span>
    }

    return (
        <div className="wrap__data">
            {<Settings visible={visible} user={user} setVisible={setVisible}/>}
            <div className='wrap__dataUser'>
                    <span>{user.userName}</span>
                    <span>{user.email}</span>
            </div>
            <div className='wrap__buttons__profile'>
                <button className='button__profile' onClick={() => setVisible(true)}>Settings</button>
                <button className='button__profile'>Health Info</button>
                <button className='button__profile'>Notifications</button>
            </div>
            <Footer/>
        </div>
    );
};
export default Profile;