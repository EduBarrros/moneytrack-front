import React from "react";
import List from "../List"
import * as C from "./style";

export type transaction = {
    expense: string,
    income: string,
    amount: number
};

const Form = (props: {handleAdd: any, transaction: transaction, setTransaction: React.Dispatch<React.SetStateAction<transaction>>, transactionsList: any, setTransactionsList: any}) => {

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>
                        Descrição
                    </C.Label>
                    <C.Input
                        value={props.transaction.expense}
                        onChange={(e) => props.setTransaction({ ...props.transaction, expense: e.target.value })}
                    />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>
                        Valor
                    </C.Label>
                    <C.Input
                        type="number"
                        value={props.transaction.amount}
                        onChange={(e) => props.setTransaction({ ...props.transaction, amount: Number(e.target.value) })}
                    />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                    />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={props.handleAdd}>Adicionar</C.Button>
            </C.Container>
            <List/>
        </>
    )
};

export default Form