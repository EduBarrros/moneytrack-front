import React from "react";
import * as C from "./style";
import { Transaction } from "../../types/transactionTypes";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const ListItem = ({ item, onDelete }: { item: Transaction, onDelete: any }) => {
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
        <FaTrash onClick={() => onDelete(item?.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default ListItem;