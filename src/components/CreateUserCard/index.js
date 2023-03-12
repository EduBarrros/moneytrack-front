import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import * as C from "./styles";

const CreateUserCard = () => {

    const [name, setName] = useState("");
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
                        title={"Nome"}
                        type={"text"}
                        placeHolder={'Digite seu nome'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        title={"Email"}
                        type={"email"}
                        placeHolder={'Digite seu email'}
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
                        <p>Ja possui Conta?</p>
                        <Link to="/">
                            <C.LinkRedirect>
                                Entrar
                            </C.LinkRedirect>
                        </Link>
                    </C.Redirect>
                    <C.Button>Cadastrar</C.Button>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default CreateUserCard