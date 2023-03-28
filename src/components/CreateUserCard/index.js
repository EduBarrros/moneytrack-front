import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";
import * as C from "./styles";
import { useCreateUserStore } from "../../store/createUser";
import { CreateUserService } from '../../services/createUser';
import { Oval } from 'react-loader-spinner';

const CreateUserCard = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { error, setError } = useCreateUserStore();
    const navigate = useNavigate();

    const CreateUserHandler = async () => {
        setLoading(true)
        const res = await CreateUserService({ name: name, email: email, password: password })

        if (res?.data?.status == 1) {
            navigate("/")
            setLoading(false)
            setError(false)
        } else {
            setError(true)
            setLoading(false)
        }
    }

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
                    <C.Button disabled={loading} onClick={() => CreateUserHandler()}>
                    {
                            loading
                                ?
                                <Oval
                                    height={25}
                                    width={25}
                                    color="#323238"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#4fa94d"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}

                                />
                                :
                                "Cadastrar"
                        }
                    </C.Button>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default CreateUserCard