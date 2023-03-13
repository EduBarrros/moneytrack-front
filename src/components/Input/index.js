import React from "react";
import * as C from "./styles";

const Input = ({title, type = 'text', value, placeHolder, onChange}) => {
    return (
            <C.InputContent>
                <C.Label>
                    {title}
                </C.Label>
                <C.Input 
                    placeholder={placeHolder}
                    onChange={onChange}
                    type={type}
                />
            </C.InputContent>
    );
};

export default Input;