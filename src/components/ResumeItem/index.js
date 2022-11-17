import * as Styled from "./styles";

const ResumeItem = ({ title, icon, value }) => {
  return (
    <Styled.Container>
      <Styled.Header>{title}</Styled.Header>
      <Styled.Total>{value}</Styled.Total>
    </Styled.Container>
  );
};

export default ResumeItem;
