import React from "react";
import List from "../List"
import * as C from "./style";
import { useAuthStore } from "../../Store/auth";
import { useCreateTransactionStore } from "../../Store/createTransaction";
import { CreateTransactionService } from "../../Services/CreateTransacion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = (props: { handleAdd: any, transactionsList: any, setTransactionsList: any }) => {

    const [descricao, setDescricao] = React.useState('')
    const [valor, setValor] = React.useState(0)
    const [type, setType] = React.useState(0)
    const { userId } = useAuthStore();
    const { successReload, setSuccessReload } = useCreateTransactionStore();

    const handleValue = (event: any) => {
        setValor(event.target.value);
    };

    const handleDescricao = (event: any) => {
        setDescricao(event.target.value)
    }

    const handleSubimit = async () => {
        const response = await CreateTransactionService(descricao, userId, type, parseInt(valor.toString()))
        if(response?.data?.status === 1){
            toast.success("Transação cadastrada com Sucesso")
            setSuccessReload(true)
        }
    }

    return (
        <>
            <ToastContainer />
            <C.Container>
                <C.SubContainer>
                    <C.Title>
                        Valor
                    </C.Title>
                    <C.Input
                        type="text"
                        value={valor}
                        onChange={handleValue}
                    />
                </C.SubContainer>
                <C.SubContainer>
                    <C.Title>
                        Descrição
                    </C.Title>
                    <C.Input
                        type="text"
                        value={descricao}
                        onChange={handleDescricao}
                    />
                </C.SubContainer>
                <C.SubContainer>
                    <C.RowContainer>
                        <C.Input
                            type="checkbox"
                            checked={type === 0}
                            onClick={() => setType(0)}
                        />
                        <C.Text>
                            Entrada
                        </C.Text>
                    </C.RowContainer>
                    <C.RowContainer>
                        <C.Input
                            type="checkbox"
                            checked={type === 1}
                            onClick={() => setType(1)}
                        />
                        <C.Text>
                            Saida
                        </C.Text>
                    </C.RowContainer>
                </C.SubContainer>
                <C.Button
                    onClick={handleSubimit}
                >
                    Adicionar
                </C.Button>
            </C.Container>
            <List itens={props.transactionsList} />
        </>
    )
};

export default Form