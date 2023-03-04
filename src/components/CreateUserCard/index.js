import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import * as C from "./styles";

const CreateUserCard = () => {
    return (
        <C.Container>
            <C.Card>
                <C.Header>
                    <C.Title>MoneyTrack</C.Title>
                </C.Header>
                <C.Form>
                    <Input campo={"Nome"} />
                    <Input campo={"Email"} />
                    <Input campo={"Senha"} />
                    <C.Redirect>
                        <p>Ja possui Conta?</p>
                        <Link to="/">
                            <C.LinkRedirect>
                                Entrar
                            </C.LinkRedirect>
                        </Link>
                    </C.Redirect>
                </C.Form>
                <C.Button>Cadastrar</C.Button>
            </C.Card>
        </C.Container>
    )
}

export default CreateUserCard