
interface User {
    id: string;
    name: string;
    email: string;
}

export const useUserId = () => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
        const user: User = JSON.parse(storedData);
        return user.id;
    }else return ''
};