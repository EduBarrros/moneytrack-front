import React, { useEffect, useState } from "react";
import Resume from "../../Components/Resume";
import Form, { transaction } from "../../Components/Form"
import GlobalStyle from "../../Components/Global/style";
import Header from "../../Components/Header";

export const Home = () => {
  localStorage.clear();
  const data = localStorage.getItem("transactions");
  
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) as transaction[] : [] as transaction[]
  );

  const [transaction, setTransaction] = useState({"expense": "", "amount": 0} as transaction);
  const [income, setIncome] = useState("0");
  const [expense, setExpense] = useState("0");
  const [total, setTotal] = useState("0");

  useEffect(() => {
     const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.income)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(parseFloat(income) - parseFloat(expense)).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = () => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transaction={transaction}
        setTransaction={setTransaction}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};