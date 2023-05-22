import React from "react";
import * as C from "./style";
import { IconType } from "react-icons/lib";
import { useCreateTransactionStore } from "../../Store/createTransaction";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDeleteTransactionStore } from "../../Store/deleteTransaction";

const ResumeItemGreen = ({ title, Icon, value, iconColor, total }: { title: string, Icon: IconType, value: string, iconColor: string, total: number }) => {

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

export default ResumeItemGreen;