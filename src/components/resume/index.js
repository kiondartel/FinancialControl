import ResumeItem from "../ResumeItem";
import * as Styled from "./styles";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <Styled.Container>
      <ResumeItem title="entrada" Icon={FaRegArrowAltCircleUp} value="1000" />
      <ResumeItem title="saida" Icon={FaRegArrowAltCircleDown} value="500" />
      <ResumeItem title="total" Icon={FaDollarSign} value="500" />
    </Styled.Container>
  );
};

export default Resume;
