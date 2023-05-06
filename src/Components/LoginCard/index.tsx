import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner';
import Input from "../Input";
import { LoginService } from "../../Services/Login";
import { useAuthStore } from "../../Store/auth";
import * as S from './style'

const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const { setIsAuthenticated, error, setError, setUserId} = useAuthStore();
    const navigate = useNavigate();

    const LoginHandler = async () => {
        setLoading(true)
        const res = await LoginService({ email: email, password: password })

        if (res?.data?.status === 1) {
            setUserId(res?.data?.user?.id)
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
        <S.Container>
            <S.Card>
                <S.Header>
                    <S.Title>MoneyTrack</S.Title>
                </S.Header>
                {
                    error
                        ?
                        <S.Text>
                            Usuário ou senha incorretos, tente novamente!
                        </S.Text>
                        :
                        null
                }
                <S.Form>
                    <Input
                        title={"Email"}
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
                    <S.Redirect>
                        <p>Não possui Conta?</p>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/CreateUser">
                            <S.LinkRedirect>
                                Cadastre-se
                            </S.LinkRedirect>
                        </Link>
                    </S.Redirect>
                    <S.Button disabled={loading} onClick={() => LoginHandler()}>
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
                    </S.Button>
                </S.Form>
            </S.Card>
        </S.Container>
    );
}

export default LoginCard;