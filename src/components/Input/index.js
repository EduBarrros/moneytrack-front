import React from "react";
import * as C from "./styles";

const Input = ({title, type, value, placeHolder}) => {
    return (
            <C.InputContent>
                <C.Label>
                    {title}
                </C.Label>
                <C.Input 
                    placeholder={placeHolder}
                />
            </C.InputContent>
    );
};

export default Input;