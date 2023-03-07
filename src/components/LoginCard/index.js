import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import * as C from "./styles";

const LoginCard = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <C.Container>
            <C.Card>
                <C.Header>
                    <C.Title>MoneyTrack</C.Title>
                </C.Header>
                <C.Form>
                    <Input
                        title={"Login"}
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        title={"Senha"}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <C.Redirect>
                        <p>Não possui Conta?</p>
                        <Link to="/CreateUser">
                            <C.LinkRedirect>
                                Cadastre-se
                            </C.LinkRedirect>
                        </Link>
                    </C.Redirect>
                    <Link to={"/Home"}>
                        <C.Button>Entrar</C.Button>
                    </Link>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default LoginCard