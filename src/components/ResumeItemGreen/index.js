import React from "react";
import * as C from "./styles";

const ResumeItemGreen = ({ title, Icon, value, iconColor }) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>
                    {title}
                </C.HeaderTitle>
                <Icon color={iconColor}/>
            </C.Header>
            <C.Total>
                {value}
            </C.Total>
        </C.Container>
    );
};

export default ResumeItemGreen;