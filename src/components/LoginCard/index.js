import React from "react";
import { Link } from "react-router-dom";
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
                    <C.Redirect>
                        <p>Não possui Conta?</p>
                        <Link to="/CreateUser">
                            <C.LinkRedirect>
                                Cadastre-se
                            </C.LinkRedirect>
                        </Link>
                    </C.Redirect>
                </C.Form>
                <Link to={"/Home"}>
                    <C.Button>Entrar</C.Button>
                </Link>
            </C.Card>
        </C.Container>
    )
}

export default LoginCard