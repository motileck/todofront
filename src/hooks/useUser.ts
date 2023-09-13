import {IUser} from "../models/IUser";


export const useUser = () => {
    const storedData = localStorage.getItem("user");
    if(storedData){
        const user:IUser = JSON.parse(storedData)
        return user
    }else return  undefined
}