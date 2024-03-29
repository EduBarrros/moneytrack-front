import React from "react";
import Resume from "../../Components/Resume";
import Form from "../../Components/Form"
import GlobalStyle from "../../Components/Global/style";
import Header from "../../Components/Header";
import { useAuthStore } from "../../Store/auth";
import { useCreateTransactionStore } from "../../Store/createTransaction";
import { GetTransactions } from "../../Services/HomeServices/indes";
import { Transaction } from "../../types/transactionTypes";
import { useDeleteTransactionStore } from "../../Store/deleteTransaction";
import { useUpdateTransactionStore } from "../../Store/updateTransaction";

export const Home = () => {

  const { userId } = useAuthStore();
  const { successReload, setSuccessReload } = useCreateTransactionStore();
  const { successDeleteReload } = useDeleteTransactionStore();
  const { successUpdateReload } = useUpdateTransactionStore();
  const [transactions, setTransactions] = React.useState<any>([]);
  const [transactionInputSum, setTransactionInputSum] = React.useState<any>([])
  const [transactionOutputSum, setTransactionOutputSum] = React.useState<any>([])

  const FilterTransactions = () => {

    if (transactions.length > 0) {
      const input = transactions?.filter((item: Transaction) => item.type === 0)
      const output = transactions?.filter((item: Transaction) => item.type === 1)

      let inputSum: number = 0
      let outputSum: number = 0

      input?.map((item: Transaction) => {
        inputSum += item?.value
      })

      output?.map((item: Transaction) => {
        outputSum += item?.value
      })

      setTransactionInputSum(inputSum)
      setTransactionOutputSum(outputSum)
    }
  }

  const FetchHomeTransaction = async () => {
    const response = await GetTransactions(userId);
    console.log('Teste res', response)
    if (response?.status === 1) {
      setTransactions(response?.transactions.reverse())
      setSuccessReload(false)
    }
  }

  React.useEffect(() => {
    FetchHomeTransaction()
  }, [successReload])

  React.useEffect(() => {
    if (successDeleteReload || successUpdateReload) FetchHomeTransaction()
  }, [successDeleteReload, successUpdateReload])

  React.useEffect(() => {
    FetchHomeTransaction()
  }, [])

  React.useEffect(() => {
    FilterTransactions()
  }, [transactions])

  return (
    <>
      <Header />
      <Resume
        income={transactionInputSum}
        expense={transactionOutputSum}
        total={transactionInputSum - transactionOutputSum}
        empty={transactions.length <= 0 ? true : false}
      />
      <Form
        handleAdd={() => null}
        transactionsList={transactions}
        setTransactionsList={null}
      />
      <GlobalStyle />
    </>
  );
};