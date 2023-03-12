import axios, * as others from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

export const LoginService = async ({ email, password }) => {
    console.log('Entrou aqui')
    await axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}