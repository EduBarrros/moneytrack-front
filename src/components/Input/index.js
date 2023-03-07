import React from "react";
import * as C from "./styles";

const Input = ({title, type, value}) => {
    return (
            <C.InputContent>
                <C.Label>
                    {title}
                </C.Label>
                <C.Input />
            </C.InputContent>
    );
};

export default Input;