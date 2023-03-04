import React from "react";
import * as C from "./styles";

const Input = ({campo}) => {
    return (
            <C.InputContent>
                <C.Label>
                    {campo}
                </C.Label>
                <C.Input />
            </C.InputContent>
    );
};

export default Input;