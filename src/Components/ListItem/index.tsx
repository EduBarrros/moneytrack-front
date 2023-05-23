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
import { Modal } from "../Modal";
import { ToastContainer, toast } from 'react-toastify';

const ListItem = ({ item, onDelete }: { item: Transaction, onDelete: any }) => {

  const { setSuccessDeleteReload, loadingDeleting, setLoadingDeleting, showDeleteModal, setShowDeleteModal  } = useDeleteTransactionStore();

  const handleDelete = async (item: string) => {
    setSuccessDeleteReload(false)
    setLoadingDeleting(true)
    const response = await DeleteTransactionService(item)
    if (response?.data?.status === 1) {
      setSuccessDeleteReload(true)
    }
    setLoadingDeleting(false)
    setShowDeleteModal(false)
    toast.success("Transação excluida com Sucesso")
  }

  return (
    <>
      <ToastContainer />
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
          <FaTrash onClick={() => setShowDeleteModal(true)} />
          <FaPen style={{ marginLeft: '20px' }} onClick={() => null} />
        </C.Td>
        <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} onFunction={() => handleDelete(item?.id)}/>
      </C.Tr>
    </>
  );
};

export default ListItem;