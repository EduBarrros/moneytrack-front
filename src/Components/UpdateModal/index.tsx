import React from 'react';
import * as C from "./style";
import { useUpdateTransactionStore } from '../../Store/updateTransaction';

type ModalProps = {
    onClose: () => void
    isOpen: boolean
    onFunction: () => void
}

export const UpdateModal = ({ isOpen, onClose, onFunction }: ModalProps) => {

    const { setNewValue, setNewDescription } = useUpdateTransactionStore();

    const handleNewValue = (event: any) => {
        setNewValue(event.target.value);
    };

    const handleNewDescricao = (event: any) => {
        setNewDescription(event.target.value)
    }


    return (
        isOpen
            ?
            <>
                <C.ModalWrapper>
                    <C.ModalContent>
                        <C.Title>
                            Atualização de registro
                        </C.Title>
                        <C.SubTitle>
                            Você irá atualizar os registros selecionados
                        </C.SubTitle>
                        <C.InputContainer>
                            <C.InputTitle>
                                Novo Valor
                            </C.InputTitle>
                            <C.Input
                                onChange={handleNewValue}
                                placeholder="R$ 0,00"
                            />
                            <C.InputTitle>
                                Nova Descrição
                            </C.InputTitle>
                            <C.Input
                                onChange={handleNewDescricao}
                                placeholder="Descrição"
                            />
                        </C.InputContainer>
                        <C.ButtonsContainer>
                            <C.Button
                                confirm
                                onClick={onClose}
                            >
                                Cancelar
                            </C.Button>
                            <C.Button
                                onClick={onFunction}
                            >
                                Atualizar
                            </C.Button>
                        </C.ButtonsContainer>
                    </C.ModalContent>
                </C.ModalWrapper>
            </>
            :
            null
    )
}