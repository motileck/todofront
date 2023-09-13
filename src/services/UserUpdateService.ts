import $api from "../http";

export default class UserUpdateService{
    static async updateUser(userid:string, userName:string,email:string){
        return $api.put(`api/updateUser/${userid}`, {userName, email});
    }

}