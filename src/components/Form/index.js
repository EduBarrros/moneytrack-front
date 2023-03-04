import React from "react";
import List from "../List"
import * as C from "./styles";

const Form = () => {

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>
                        Descrição
                    </C.Label>
                    <C.Input/>
                </C.InputContent>
                <C.InputContent>
                    <C.Label>
                        Valor
                    </C.Label>
                    <C.Input
                        type="number"
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
                <C.Button>Adicionar</C.Button>
            </C.Container>
            <List/>
        </>
    )
};

export default Form