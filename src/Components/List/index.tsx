import ListItem from "../ListItem";
import * as C from "./style";
import { Transaction } from "../../types/transactionTypes";

const List = ({ itens, setItens }: { itens?: any, setItens?: any }) => {
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
        {
          itens?.map((item: Transaction, index: number) => (
            <ListItem key={index} item={item} onDelete={() => null} />
          ))
        }
      </C.Tbody>
    </C.Table>
  );
};

export default List;