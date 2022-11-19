import GridItem from "../../GridItem";
import * as Styled from "./styles";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };
  return (
    <Styled.Table>
      <Styled.Thead>
        <Styled.Tr>
          <Styled.Th width={40}>Descrição</Styled.Th>
          <Styled.Th width={40}>Valor</Styled.Th>
          <Styled.Th width={10} alignCenter>
            Tipo
          </Styled.Th>
          <Styled.Th width={10}></Styled.Th>
        </Styled.Tr>
      </Styled.Thead>
      <Styled.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </Styled.Tbody>
    </Styled.Table>
  );
};

export default Grid;
