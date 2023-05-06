import React from "react";
import * as C from "./style";
import { IconType } from "react-icons/lib";
import { useCreateTransactionStore } from "../../Store/createTransaction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ResumeItem = ({ title, Icon, value, iconColor }: { title: string, Icon: IconType, value: string, iconColor: string }) => {

    const { successReload, setSuccessReload, loading, setLoading } = useCreateTransactionStore();
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>
                    {title}
                </C.HeaderTitle>
                <Icon color={iconColor} />
            </C.Header>
            {
                loading
                    ?
                    <Skeleton 
                    height={40} 
                    width={230}
                    highlightColor={'#00B37E'}
                    baseColor={'#00D57E'}
                    />
                    :
                    <C.Total>
                        R$ {parseFloat(value).toFixed(2)}
                    </C.Total>
            }
        </C.Container>
    );
};

export default ResumeItem;