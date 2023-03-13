import Input from "../Input";
import * as C from "./styles";
import { Oval } from 'react-loader-spinner';
import { useAuthStore } from "../../store/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginService } from '../../services/login';



const LoginCard = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const { isAuthenticated, setIsAuthenticated, error, setError } = useAuthStore();
    const navigate = useNavigate();

    const LoginHandler = async () => {
        setLoading(true)
        const res = await LoginService({ email: email, password: password })

        if (res?.data?.status == 1) {
            setIsAuthenticated()
            navigate("/Home")
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
                {
                    error
                        ?
                        <C.Text>
                            Usuário ou senha incorretos, tente novamente!
                        </C.Text>
                        :
                        null
                }
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
                    <C.Button disabled={loading} onClick={() => LoginHandler()}>
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
                                "Entrar"
                        }
                    </C.Button>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default LoginCard