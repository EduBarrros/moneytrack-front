import React from "react";
import * as C from "./style";
import { IconType } from "react-icons/lib";

const ResumeItemGreen = ({ title, Icon, value, iconColor, total }: { title: string, Icon: IconType, value: string, iconColor: string, total: number }) => {
    return (
        <C.Container
            total={total}
        >
            <C.Header>
                <C.HeaderTitle>
                    {title}
                </C.HeaderTitle>
                <Icon color={iconColor} />
            </C.Header>
            <C.Total>
                R$ {parseFloat(value).toFixed(2)}
            </C.Total>
        </C.Container>
    );
};

export default ResumeItemGreen;