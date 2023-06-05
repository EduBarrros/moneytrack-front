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
import { useUpdateTransactionStore } from "../../Store/updateTransaction";
import { DeleteTransactionService } from "../../Services/DeleteTransacation";
import { UpdateTransactionService } from "../../Services/UpdateTransaction";
import { DeleteModal } from "../DeleteModal";
import { UpdateModal } from "../UpdateModal";
import { ToastContainer, toast } from 'react-toastify';

const ListItem = ({ item, onDelete }: { item: Transaction, onDelete: any }) => {

  const { setSuccessDeleteReload, loadingDeleting, setLoadingDeleting, showDeleteModal, setShowDeleteModal  } = useDeleteTransactionStore();

  const { setSuccessUpdateReload, loadingUpdateting, setLoadingUpdating, showUpdateModal, setShowUpdateModal, newDescription, newValue } = useUpdateTransactionStore();

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

  const handleUpdate = async (item: string) => {
    setSuccessUpdateReload(false)
    setLoadingUpdating(true)
    const response = await UpdateTransactionService({id: item, newDescription: newDescription, newValue: newValue})
    if (response?.data?.status === 1) {
      setSuccessUpdateReload(true)
    }
    setLoadingUpdating(false)
    setShowUpdateModal(false)
    toast.success("Transação atualizada com Sucesso")
  }

  return (
    <>
      <ToastContainer />
      <C.Tr>
        <C.Td>{item?.description}</C.Td>
        <C.Td>R$ {item?.value.toFixed(2).replace('.',',')}</C.Td>
        <C.Td alignCenter>
          {item?.type ? (
            <FaRegArrowAltCircleDown color="red" />
          ) : (
            <FaRegArrowAltCircleUp color="green" />
          )}
        </C.Td>
        <C.Td alignCenter>
          <FaTrash onClick={() => setShowDeleteModal(true)} />
          <FaPen style={{ marginLeft: '20px' }} onClick={() => setShowUpdateModal(true)} />
        </C.Td>
        <DeleteModal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} onFunction={() => handleDelete(item?.id)}/>
        <UpdateModal isOpen={showUpdateModal} onClose={() => setShowUpdateModal(false)} onFunction={() => handleUpdate(item?.id)}/>
      </C.Tr>
    </>
  );
};

export default ListItem;