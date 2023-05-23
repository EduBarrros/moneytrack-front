import React from 'react';
import * as C from "./style";

type ModalProps = {
    onClose: () => void
    isOpen: boolean
    onFunction: () => void
}

export const Modal = ({ isOpen, onClose, onFunction}: ModalProps) => (
    isOpen
        ?
        <>
            <C.ModalWrapper>
                <C.ModalContent>
                    <C.Title>
                        Deseja Realmente excluir este registro?
                    </C.Title>
                    <C.SubTitle>
                        Essa exclusão será permantente.
                    </C.SubTitle>
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
                            Excluir
                        </C.Button>
                    </C.ButtonsContainer>
                </C.ModalContent>
            </C.ModalWrapper>
        </>
        :
        null
)