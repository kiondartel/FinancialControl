import ResumeItem from "../ResumeItem";
import * as Styled from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <Styled.Container>
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem
        title="Saida"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Styled.Container>
  );
};

export default Resume;
