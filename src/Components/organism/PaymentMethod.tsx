import styled from "styled-components/native";

export const PaymentMethod = () => {
  return (
    <PaymentMethodArea>
      <Title>Forma de Pagamento</Title>
    </PaymentMethodArea>
  );
};

const PaymentMethodArea = styled.View`
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  width: 90%;
  border-radius: 5px;
  height:100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 3px #00000060;
  margin-bottom: 20px;
  margin-top: 10px;
`;


const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`;