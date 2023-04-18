import React from "react";
import * as C from "./style";
import { IconType } from "react-icons/lib";

const ResumeItemGreen = ({ title, Icon, value, iconColor }: { title: string, Icon: IconType, value: string, iconColor: string }) => {
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