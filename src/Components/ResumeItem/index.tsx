import React from "react";
import * as C from "./style";
import { IconType } from "react-icons/lib";
import { useCreateTransactionStore } from "../../Store/createTransaction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDeleteTransactionStore } from "../../Store/deleteTransaction";

const ResumeItem = ({ title, Icon, value = 0, iconColor, empty}: { title: string, Icon: IconType, value: any, iconColor: string, empty: boolean }) => {

    const { successReload, setSuccessReload, loading, setLoading } = useCreateTransactionStore();
    const { loadingDeleting } = useDeleteTransactionStore();

    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>
                    {title}
                </C.HeaderTitle>
                <Icon color={iconColor} />
            </C.Header>
            {
                loading || loadingDeleting
                    ?
                    <Skeleton 
                    height={40} 
                    width={230}
                    highlightColor={'#bfbfbf'}
                    baseColor={'#8c8c8c'}
                    />
                    :
                    <C.Total>
                        R$ {empty ? '0.00' : parseFloat(value).toFixed(2)}
                    </C.Total>
            }
        </C.Container>
    );
};

export default ResumeItem;