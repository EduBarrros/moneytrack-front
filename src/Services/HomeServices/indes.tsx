import axios from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

export type Transaction = {
    id: string
    value: number
    type: number
    createdAt: string
    description: string
    userId: string
}

export type TransactionsResponse = {
    status: number,
    transactions: Transaction[]
};

export const GetTransactions = async (userId: string) => {
    try {
        const response = await axios.get<TransactionsResponse>(`${BASE_URL}/GetTransactionsByUserId?userId=${userId}`)
        return response?.data;
    } catch (error) {
        console.log('Error: ', error)
    }

}