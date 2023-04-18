import axios from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

export type User = {
    id: string,
    name: string,
    emial: string
};

export type LoginResponse = {
    status: number,
    user: User
};

export const LoginService = async ({ email, password }: {email: string, password: string}) => {
    try {
        const response = await axios.get<LoginResponse>(`${BASE_URL}/Login?email=${email}&password=${password}`);    

        return response;
    } catch (error) {
        
    }
}