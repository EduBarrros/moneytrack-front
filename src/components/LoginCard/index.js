import Input from "../Input";
import * as C from "./styles";
import { Link, useNavigate} from "react-router-dom";
import { useStore } from "../../store/auth";
import React, { useEffect, useState } from "react";
import { LoginService } from '../../services/login';


const LoginCard = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const { isAuthenticated, setIsAuthenticated } = useStore();
    const navigate = useNavigate();

    const LoginHandler = async () => {
        const res = await LoginService({ email: email, password: password })

        console.log('Teste res', res)

        if (res.status == 1) {
            console.log('Entrou aqui')
            setIsAuthenticated()
            navigate("/Home")
        }
    }

    useEffect(() => {
        console.log('Teste auth 2', isAuthenticated)
    }, [isAuthenticated])

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