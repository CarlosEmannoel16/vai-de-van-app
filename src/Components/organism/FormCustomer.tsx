import styled from "styled-components/native";
import { InputText } from "../atoms/InputText";

export const FormCustomer = () => {
  return (
    <FormCustomerArea>
      <Title>Dados do passageiro</Title>
      <InputText label="Nome Completo" placeholder="" />
      <InputText label="Cpf" placeholder="" />
      <InputText label="Celular" placeholder="" />
      <InputText label="E-mail" placeholder="" />
    </FormCustomerArea>
  );
};

const FormCustomerArea = styled.View`
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  width: 90%;
  border-radius: 10px;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 3px #00000060;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`;