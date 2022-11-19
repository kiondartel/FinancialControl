import { useState } from "react";
import Grid from "../Grid";
import * as Styled from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setamount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setamount("");
  };

  return (
    <>
      <Styled.Container>
        <Styled.InputContent>
          <Styled.Label>Descrição</Styled.Label>
          <Styled.Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Styled.InputContent>
        <Styled.InputContent>
          <Styled.Label>Valor</Styled.Label>
          <Styled.Input
            value={amount}
            type="number"
            onChange={(e) => setamount(e.target.value)}
          />
        </Styled.InputContent>
        <Styled.RadioGroup>
          <Styled.Input
            type="radio"
            id="rincome"
            defaultChecked
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <Styled.Label htmlFor="rincome">Entrada</Styled.Label>
          <Styled.Input
            type="radio"
            id="rexpenses"
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <Styled.Label htmlFor="rexpenses">Saida</Styled.Label>
        </Styled.RadioGroup>
        <Styled.Button onClick={handleSave}>Adicionar</Styled.Button>
      </Styled.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
