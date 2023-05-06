import axios from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

type Transaction = {
    id: string;
    type: number;
    value: number;
    user: string;
    description: string;
}

type CreateTransactionResponse = {
    status: number;
    transaction: Transaction
}

export const CreateTransactionService = async (description: string, userId: string, type: number, value: number) => {
    try {
        const response = await axios.post<CreateTransactionResponse>(`${BASE_URL}/CreateTransaction`, {
            value: value,
            type: type,
            userId: userId,
            description: description
        })

        return response;
    } catch (error) {
        console.log(error)
    }

}