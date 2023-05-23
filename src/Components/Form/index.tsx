import React from "react";
import List from "../List"
import * as C from "./style";
import { useAuthStore } from "../../Store/auth";
import { useCreateTransactionStore } from "../../Store/createTransaction";
import { CreateTransactionService } from "../../Services/CreateTransacion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Switch from "react-switch";
import { ReactSVG } from "react-svg";

const Form = (props: { handleAdd: any, transactionsList: any, setTransactionsList: any }) => {

    const [descricao, setDescricao] = React.useState('')
    const [valor, setValor] = React.useState('')
    const [type, setType] = React.useState(0)
    const { userId } = useAuthStore();
    const { successDeleteReload, setSuccessReload, loading, setLoading } = useCreateTransactionStore();

    const handleValue = (event: any) => {
        setValor(event.target.value);
    };

    const handleDescricao = (event: any) => {
        setDescricao(event.target.value)
    }

    const handleSubimit = async () => {
        console.log('valor', valor)
        if (descricao === '' || valor === '') {
            toast.warning("Preencha todos os campos da transação.")
            return
        }

        setLoading(true)
        const response = await CreateTransactionService(descricao, userId, type, parseFloat(valor.toString()))
        if (response?.data?.status === 1) {
            toast.success("Transação cadastrada com Sucesso")
            setSuccessReload(true)
            setValor('')
            setDescricao('')
        }
        setLoading(false)
    }

    return (
        <>
            <ToastContainer />
            <C.Container>
                <C.SubContainer>
                    <C.Input
                        type="text"
                        value={valor}
                        onChange={handleValue}
                        placeholder="R$ 0,00"
                    />
                </C.SubContainer>
                <C.SubContainer>
                    <C.Input
                        type="text"
                        value={descricao}
                        onChange={handleDescricao}
                        placeholder="Descrição"
                    />
                </C.SubContainer>
                <C.SubContainerSwitch>
                    <C.Text
                        mr={'10px'}
                        color={type === 0 ? '#00B37E' : ''}
                    >
                        Entrada
                    </C.Text>

                    <Switch
                        onChange={() => setType(type === 0 ? 1 : 0)}
                        checked={type === 1}
                        offColor="#00B37E"
                        onColor="#FF0000"
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                    <C.Text
                        ml={'10px'}
                        color={type === 1 ? '#FF0000' : ''}
                    >
                        Saida
                    </C.Text>
                </C.SubContainerSwitch>
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