import React from "react";
import Input from "../Input";
import * as C from "./styles";

const LoginCard = () => {
    return (
        <C.Container>
            <C.Card>
                <C.Header>
                    <C.Title>MoneyTrack</C.Title>
                </C.Header>
                <C.Form>
                    <Input campo={"Login"} />
                    <Input campo={"Senha"} />
                    <C.Link>Cadastre-se</C.Link>
                </C.Form>
                <C.Button>Entrar</C.Button>
            </C.Card>
        </C.Container>
    )
}

export default LoginCard