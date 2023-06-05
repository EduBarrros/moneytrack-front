import axios from 'axios';

const BASE_URL = "https://moneytrack-service.onrender.com"

export const UpdateTransactionService = async (transaction: any) => {
    try {

        console.log('teste data', {
            transactionId: transaction?.id,
            descricao: transaction?.newDescription,
            valor: parseFloat(transaction?.newValue)
        })

        const response = await axios.post(`${BASE_URL}/UpdateTransactionById`, {
            transactionId: transaction?.id,
            descricao: transaction?.newDescription,
            valor: parseFloat(transaction?.newValue)
        })

        return response;
    } catch (error) {
        console.log(error)
    }
}