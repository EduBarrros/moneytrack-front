import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserStore } from "../../Store/createUser";
import { CreateUserService } from '../../Services/CreateUser';
import { Oval } from 'react-loader-spinner';
import Input from "../Input";
import * as S from "./style";

const CreateUserCard = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { setError } = useCreateUserStore();
    const navigate = useNavigate();

    const CreateUserHandler = async () => {
        setLoading(true)
        const res = await CreateUserService({ name: name, email: email, password: password })

        if (res?.data?.status === 1) {
            navigate("/")
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
                <S.Form>
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
                    <S.Redirect>
                        <p>Ja possui Conta?</p>
                        <Link to="/">
                            <S.LinkRedirect>
                                Entrar
                            </S.LinkRedirect>
                        </Link>
                    </S.Redirect>
                    <S.Button disabled={loading} onClick={() => CreateUserHandler()}>
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
                    </S.Button>
                </S.Form>
            </S.Card>
        </S.Container>
    )
}

export default CreateUserCard;