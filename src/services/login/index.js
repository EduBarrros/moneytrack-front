import axios, * as others from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

export const LoginService = async ({ email, password }) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email: email,
            password: password
        })    

        return response
    } catch (error) {
        return error
    }
    
}