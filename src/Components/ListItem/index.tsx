import React from "react";
import * as C from "./style";
import { Transaction } from "../../types/transactionTypes";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaPen
} from "react-icons/fa";
import { useDeleteTransactionStore } from "../../Store/deleteTransaction";
import { DeleteTransactionService } from "../../Services/DeleteTransacation";

const ListItem = ({ item, onDelete }: { item: Transaction, onDelete: any }) => {

  const { setSuccessDeleteReload, loadingDeleting, setLoadingDeleting } = useDeleteTransactionStore();

  const handleDelete = async (item: string) => {
    setSuccessDeleteReload(false)
    setLoadingDeleting(true)
    const response = await DeleteTransactionService(item)
    if (response?.data?.status === 1) {
        setSuccessDeleteReload(true)
    }
    setLoadingDeleting(false)
  }

  return (
    <C.Tr>
      <C.Td>{item?.description}</C.Td>
      <C.Td>{item?.value}</C.Td>
      <C.Td alignCenter>
        {item?.type ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => handleDelete(item?.id)} />
        <FaPen style={{ marginLeft: '20px' }} onClick={() => null} />
      </C.Td>
    </C.Tr>
  );
};

export default ListItem;