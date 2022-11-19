import * as Styled from "./styles";

import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <Styled.Tr>
      <Styled.Td>{item.desc}</Styled.Td>
      <Styled.Td>{item.amount}</Styled.Td>
      <Styled.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </Styled.Td>
      <Styled.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </Styled.Td>
    </Styled.Tr>
  );
};

export default GridItem;
