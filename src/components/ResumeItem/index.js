import * as Styled from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <Styled.Container>
      <Styled.Header>{title}</Styled.Header>
      <Icon />
      <Styled.Total>{value}</Styled.Total>
    </Styled.Container>
  );
};

export default ResumeItem;
