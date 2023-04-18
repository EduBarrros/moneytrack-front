import axios from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

export type User = {
    name: string,
    email: string
}

export type CreateUserResponse = {
    status: number,
    user: User
}

export const CreateUserService = async ({ name, email, password }: {name: string, email: string, password: string}) => {
    try {
        const response = await axios.post<CreateUserResponse>(`${BASE_URL}/CreateUser`, {
            name: name,
            email: email,
            password: password
        })    

        return response;
    } catch (error) {
        
    }
    
}