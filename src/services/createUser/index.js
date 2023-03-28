import axios, * as others from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

export const CreateUserService = async ({ name, email, password }) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, {
            name: name,
            email: email,
            password: password
        })    

        return response
    } catch (error) {
        return error
    }
    
}