import axios, * as others from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

export const LoginService = async ({ email, password }) => {
    const response = await axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password
    })

    if (response.status === 200) {
        return response.data
    } else {
        return (
            {
                status: 0,
                msg: "Ocorreu um problema ao logar."
            }
        )
    }
}