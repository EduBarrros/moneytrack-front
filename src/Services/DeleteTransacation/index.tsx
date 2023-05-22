import axios from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

type Transaction = {
    id: string;
    type: number;
    value: number;
    user: string;
    description: string;
}

type DeleteTransactionResponse = {
    status: number;
    delete: boolean;
}

export const DeleteTransactionService = async (transactionId: string) => {
    try {
        const response = await axios.delete<DeleteTransactionResponse>(`${BASE_URL}/DeleteTransactionById?transactionId=${transactionId}`)
        return response;
    } catch (error) {
        console.log(error)
    }

}