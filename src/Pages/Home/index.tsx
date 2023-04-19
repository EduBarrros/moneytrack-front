import React from "react";
import Resume from "../../Components/Resume";
import Form from "../../Components/Form"
import GlobalStyle from "../../Components/Global/style";
import Header from "../../Components/Header";
import { useAuthStore } from "../../Store/auth";
import { GetTransactions } from "../../Services/HomeServices/indes";
import { Transaction } from "../../types/transactionTypes";

export const Home = () => {

  const { userId } = useAuthStore();
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

  React.useEffect(() => {
    const FetchHomeTransaction = async () => {
      const response = await GetTransactions(userId);

      if (response?.status === 1) {
        setTransactions(response?.transactions)
      }
    }

    FetchHomeTransaction()
  }, [])

  React.useEffect(() => {
    FilterTransactions()
  }, [transactions])

  return (
    <>
      <Header />
      <Resume income={transactionInputSum} expense={transactionOutputSum} total={transactionInputSum - transactionOutputSum} />
      <Form
        handleAdd={() => null}
        transactionsList={transactions}
        setTransactionsList={null}
      />
      <GlobalStyle />
    </>
  );
};