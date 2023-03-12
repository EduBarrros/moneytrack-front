import Input from "../Input";
import * as C from "./styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginService } from '../../services/login'

const LoginCard = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginHandler = async () => {
        const LoginResponse = await LoginService({ email: 'selmadias@gmail.com', password: 'teste1234' })

        console.log('Teste login', LoginResponse)
    }

    return (
        <C.Container>
            <C.Card>
                <C.Header>
                    <C.Title>MoneyTrack</C.Title>
                </C.Header>
                <C.Form>
                    <Input
                        title={"Login"}
                        placeHolder={'Digite seu email'}
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        title={"Senha"}
                        type={"password"}
                        placeHolder={'Digite sua senha'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <C.Redirect>
                        <p>Não possui Conta?</p>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/CreateUser">
                            <C.LinkRedirect>
                                Cadastre-se
                            </C.LinkRedirect>
                        </Link>
                    </C.Redirect>
                    <C.Button onClick={() => LoginHandler()}>
                        Entrar
                    </C.Button>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default LoginCard