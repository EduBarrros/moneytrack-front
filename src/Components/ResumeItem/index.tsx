import React from "react";
import * as C from "./style";
import { IconType } from "react-icons/lib";
import { useCreateTransactionStore } from "../../Store/createTransaction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDeleteTransactionStore } from "../../Store/deleteTransaction";

const ResumeItem = ({ title, Icon, value = 0, iconColor }: { title: string, Icon: IconType, value: any, iconColor: string }) => {

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