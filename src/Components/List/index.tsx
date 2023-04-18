import React from "react";
import ListItem from "../ListItem";
import * as C from "./style";

const List = ({ itens, setItens }: {itens?: any, setItens?: any}) => {
  const onDelete = ({ID}: {ID: any}) => {
    const newArray = itens.filter(({transaction}: {transaction: any}) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map(({item, index} : {item: any, index: any}) => (
          <ListItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default List;