import React from "react";
import * as C from "./style";
import { IconType } from "react-icons/lib";

const ResumeItem = ({ title, Icon, value, iconColor }: {title: string, Icon: IconType, value: string, iconColor: string}) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>
                    {title}
                </C.HeaderTitle>
                <Icon color={iconColor}/>
            </C.Header>
            <C.Total>
                R$ {parseFloat(value).toFixed(2)}
            </C.Total>
        </C.Container>
    );
};

export default ResumeItem;