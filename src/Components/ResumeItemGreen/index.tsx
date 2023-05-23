import React from "react";
import * as C from "./style";
import { IconType } from "react-icons/lib";
import { useCreateTransactionStore } from "../../Store/createTransaction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDeleteTransactionStore } from "../../Store/deleteTransaction";

const ResumeItemGreen = ({ title, Icon, value, iconColor, total, empty }: { title: string, Icon: IconType, value: string, iconColor: string, total: number, empty: boolean }) => {

    const { successReload, setSuccessReload, loading, setLoading } = useCreateTransactionStore();
    const { loadingDeleting } = useDeleteTransactionStore();
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

export default ResumeItemGreen;