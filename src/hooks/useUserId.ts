import {IUser} from "../models/IUser";

export const useUserId = () => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
        const user: IUser = JSON.parse(storedData);
        return user.id;
    }else return ''
};