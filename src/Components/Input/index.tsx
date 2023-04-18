import React, { ChangeEventHandler } from "react";
import * as S from "./style";

const Input = ({title, type = 'text', value, placeHolder, onChange}: {title: string, type: string, value: string, placeHolder: string, onChange: ChangeEventHandler<HTMLInputElement>}) => {
    return (
            <S.InputContent>
                <S.Label>
                    {title}
                </S.Label>
                <S.Input 
                    placeholder={placeHolder}
                    onChange={onChange}
                    type={type}
                />
            </S.InputContent>
    );
};

export default Input;