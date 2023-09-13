interface User {
    id: string;
    userName: string;
    email: string;
}

export const useUserName = () => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
        const user: User = JSON.parse(storedData);
        return user.userName;
    }else return ''
};